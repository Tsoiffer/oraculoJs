let pantalla1 = document.getElementById("pantalla1");
let pantalla2 = document.getElementById("pantalla2");
let pantalla3 = document.getElementById("pantalla3");
let pantalla4 = document.getElementById("pantalla4");
let pantalla5 = document.getElementById("pantalla5");
let alarma = document.getElementById("alarma");
let divPantalla5 = document.getElementById("divPantalla5");
let divPantalla1 = document.getElementById("divPantalla1");
let carta1 = document.getElementById("carta1");
let carta2 = document.getElementById("carta2");
let carta3 = document.getElementById("carta3");
let carta4 = document.getElementById("carta4");
let carta5 = document.getElementById("carta5");
let carta6 = document.getElementById("carta6");
let jugador1 = document.getElementById("jugador1");
let jugador2 = document.getElementById("jugador2");
let btnjugar = document.getElementById("btnjugar");
let btnpantalla3 = document.getElementById("btnpantalla3");
let btnVolverATirar = document.getElementById("btnVolverATirar");
let btnVerResultado = document.getElementById("btnVerResultado");
let btnGuardar = document.getElementById("btnGuardar");
let btnSalirsinGuardarr = document.getElementById("btnSalirsinGuardarr");
let contador = 0;
let expandir = document.getElementsByClassName("expandir");
let cartasElegidas = new Array(7);
let consultasGuardada = new Array(500);
for (let j = 0; j < consultasGuardada.length; j++) {
  consultasGuardada[j] = new Array(7);
}
let i;

// Primer Pantalla
divPantalla1.addEventListener("click", reAbirPantalla5);

function reAbirPantalla5(e) {
  if (e.target.getAttribute("class") == "expandir") {
    i = e.target.getAttribute("id");
    divPantalla5.innerHTML = ``;
    crearPantalla5(
      e.target.getAttribute("data-player1"),
      e.target.getAttribute("data-player2"),
      consultasGuardada[i],
      cartas,
      divPantalla5
    );
    console.log("Vamos a la pantalla5");
    btnGuardar.style.display = "none";
    pantalla1.style.display = "none";
    pantalla4.style.display = "none";
    pantalla5.style.display = "block";
  }
  if (e.target.getAttribute("class") == "eliminar") {
    i = "diveliminar" + e.target.getAttribute("id");
    let elimiarDiv = document.getElementById(
      "diveliminar" + e.target.getAttribute("id")
    );
    divPantalla1.removeChild(elimiarDiv);
  }
}

function cambiarpantalla1() {
  if (jugador1.value == "" || jugador2.value == "") {
    alarma.style.display = "block";
  } else {
    console.log("Vamos a la pantalla2");
    alarma.style.display = "none";
    pantalla1.style.display = "none";
    pantalla4.style.display = "none";
    pantalla2.style.display = "block";
    crearpronostico();
    window.setTimeout(cambiarpantalla2, 3000);
  }
}

btnjugar.addEventListener("click", cambiarpantalla1);

// Segunda Pantalla
function cambiarpantalla2() {
  console.log("Vamos a la pantalla3");
  pantalla2.style.display = "none";
  pantalla3.style.display = "block";
}

// Tercer Pantalla
btnpantalla3.addEventListener("click", cambiarpantalla3);
function cambiarpantalla3() {
  console.log("Vamos a la pantalla4");
  pantalla3.style.display = "none";
  pantalla4.style.display = "flex";
}

// Cuarta Pantalla
btnVolverATirar.addEventListener("click", cambiarpantalla1);

btnVerResultado.addEventListener("click", cambiarpantalla5);

function cambiarpantalla5() {
  console.log("Vamos a la pantalla5");
  pantalla1.style.display = "none";
  pantalla4.style.display = "none";
  divPantalla5.innerHTML = ``;
  crearPantalla5(
    jugador1.value,
    jugador2.value,
    cartasElegidas,
    cartas,
    divPantalla5
  );
  pantalla5.style.display = "block";
}

// Quinta Pantalla

btnGuardar.addEventListener("click", guardarPronostico);
function guardarPronostico() {
  let div = document.createElement("div");
  div.id = "diveliminar" + contador;
  div.classList.add("divpartidas");
  divPantalla1.appendChild(div);
  crearPantalla5(jugador1.value, jugador2.value, cartasElegidas, cartas, div);
  let expandir = document.createElement("button");
  expandir.classList.add("expandir");
  expandir.id = contador;
  expandir.setAttribute("data-player1", jugador1.value);
  expandir.setAttribute("data-player2", jugador2.value);
  expandir.appendChild(document.createTextNode("Expandir"));
  let eliminar = document.createElement("button");
  eliminar.classList.add("eliminar");
  eliminar.id = contador;
  eliminar.appendChild(document.createTextNode("Eliminar"));
  div.append(expandir, eliminar);
  volverPantalla1();

  consultasGuardada[contador][1] = cartasElegidas[1];
  consultasGuardada[contador][2] = cartasElegidas[2];
  consultasGuardada[contador][3] = cartasElegidas[3];
  consultasGuardada[contador][4] = cartasElegidas[4];
  consultasGuardada[contador][5] = cartasElegidas[5];
  consultasGuardada[contador][6] = cartasElegidas[6];
  contador++;
}
btnSalirsinGuardarr.addEventListener("click", volverPantalla1);
function volverPantalla1() {
  console.log("Vamos a la pantalla1");
  jugador1.value = "";
  jugador2.value = "";
  btnGuardar.style.display = "inline-block";
  pantalla5.style.display = "none";
  pantalla1.style.display = "block";
}

function crearPantalla5(
  jugador1,
  jugador2,
  cartasElegidas,
  cartas,
  padreDelUl
) {
  let ul = document.createElement("ul");
  ul.classList.add("list-group");
  let li1 = document.createElement("li");
  li1.classList.add("list-group-item");
  let h21 = document.createElement("h2");
  h21.appendChild(document.createTextNode(jugador1));
  let img1 = document.createElement("img");
  img1.src = cartas[cartasElegidas[1]].imagen;
  let img2 = document.createElement("img");
  img2.src = cartas[cartasElegidas[2]].imagen;
  let img3 = document.createElement("img");
  img3.src = cartas[cartasElegidas[3]].imagen;
  li1.append(h21, img1, img2, img3);

  let li2 = document.createElement("li");
  li2.classList.add("list-group-item");
  let h22 = document.createElement("h2");
  h22.appendChild(document.createTextNode(jugador2));
  let img4 = document.createElement("img");
  img4.src = cartas[cartasElegidas[4]].imagen;
  let img5 = document.createElement("img");
  img5.src = cartas[cartasElegidas[5]].imagen;
  let img6 = document.createElement("img");
  img6.src = cartas[cartasElegidas[6]].imagen;
  li2.append(h22, img4, img5, img6);

  ul.appendChild(li1);
  ul.appendChild(li2);

  let h11 = document.createElement("h1");
  let h12 = document.createElement("h1");
  h11.appendChild(document.createTextNode(jugador1 + " y " + jugador2));
  h12.appendChild(document.createTextNode(Machear(cartasElegidas)));
  padreDelUl.append(ul, h11, h12);
}

function Machear(cartasElegidas) {
  let num1 = (cartasElegidas[1] + cartasElegidas[2] + cartasElegidas[3]) % 2;
  let num2 = (cartasElegidas[4] + cartasElegidas[5] + cartasElegidas[6]) % 2;
  if ((num1 == 0 && num2 == 0) || (num1 > 0 && num2 > 0)) {
    return "Hicieorn Match";
  } else {
    return " No Hicieorn Match";
  }
}

//Definiendo las cartas

class Carta {
  constructor(nombre, imagen, id, leyenda) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.id = id;
    this.leyenda = leyenda;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get imagen() {
    return this._imagen;
  }
  set imagen(imagen) {
    this._imagen = imagen;
  }
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }
  get leyenda() {
    return this._leyenda;
  }
  set leyenda(leyenda) {
    this._leyenda = leyenda;
  }
}

var cartas = new Array(26);

cartas[1] = new Carta(
  "Fehu",
  "imagenes/Fehu.png",
  "1",
  "Tienes la seguridad necesaria para atraer a tu vida lo que necesitas. Es buen momento para iniciar negocios y ayudar a los demás."
);
cartas[2] = new Carta(
  "Jera",
  "imagenes/Jera.png",
  "2",
  "Esta runa es un buen augurio, simboliza la recompensa por el trabajo duro. Es un momento propicio para comenzar proyectos."
);
cartas[3] = new Carta(
  "wunjo",
  "imagenes/wunjo.png",
  "3",
  "Renovación interior, fruto de tu evolución. Este avance se manifestará en una mejora en tu trabajo que será reconocido."
);
cartas[4] = new Carta(
  "Mannaz",
  "imagenes/Mannaz.png",
  "4",
  "Toma de decisiones exitosa. Gracias a tu creatividad y tu poder de convicción podrás subsanar tus errores."
);
cartas[5] = new Carta(
  "Naudhiz",
  "imagenes/Naudhiz.png",
  "5",
  "Nadie ni nada es perfecto. Reconocer dónde están los fallos propios, es el primer paso para poder cambiar."
);
cartas[6] = new Carta(
  "Kano",
  "imagenes/Kano.png",
  "6",
  "Representa el avance por un camino libre de obstáculos, gracias a tu intuición. Te acompañará la seguridad necesaria para hacer frente a nuevos retos sentimentales."
);
cartas[7] = new Carta(
  "Hagalaz",
  "imagenes/Hagalaz.png",
  "7",
  "No te resistas en este momento de crisis y reconócelo como una oportunidad para avanzar. Si lo consigues te convertirás en un ser nuevo. Acepta los cambios y valora tus recursos actuales."
);
cartas[8] = new Carta(
  "Berkana",
  "imagenes/Berkana.png",
  "8",
  "Gozarás de gran estabilidad para ayudar y proteger a tus amigos y tu pareja. Indica una gran capacidad para generar y repartir amor."
);
cartas[9] = new Carta(
  "Tiwaz",
  "imagenes/Tiwaz.png",
  "9",
  "Es momento de actuar y expresar con firmeza, para lograr lo que te propongas."
);
cartas[10] = new Carta(
  "Isa",
  "imagenes/Isa.png",
  "10",
  "Mantén la firmeza frente a los ambientes  y personas inestables. Si tu trabajo y tus relaciones se tambalean confía en ti, ya que podrían desequilibrarte."
);
cartas[11] = new Carta(
  "Gebo",
  "imagenes/Gebo.png",
  "11",
  "El trabajo en equipo será muy beneficioso para ti. Es buena época para abrirte al amor y las relaciones de pareja. Celebra con generosidad el compartir."
);
cartas[12] = new Carta(
  "Raidho",
  "imagenes/Raidho.png",
  "12",
  "No te abrumes ante la perspectiva de viajes y cambios de domicilio. Si sientes la necesidad de retirarte para pensar, es normal. Una vez superes tu rechazo inicial, todo irá sobre ruedas."
);
cartas[13] = new Carta(
  "Thurizaz",
  "imagenes/Thurizaz.png",
  "13",
  "Indica un nuevo comienzo. Ábrete plenamente aceptado los cambios y libérate de tus ideas caducadas. De esa forma, disfrutarás plenamente de tu nueva etapa."
);
cartas[14] = new Carta(
  "Ehwaz",
  "imagenes/Ehwaz.png",
  "14",
  "No siempre cuentas con la fuerza para avanzar en lo que te propones. Aprovecha este impulso y actúa con nobleza y respeto."
);
cartas[15] = new Carta(
  "Ansuz",
  "imagenes/Ansuz.png",
  "15",
  "Confía en tu creatividad, las señales y las sincronicidades. Ellas te aportarán grandes beneficios. Confía en el consejo de familiares y amigos."
);
cartas[16] = new Carta(
  "Perdhro",
  "imagenes/Perdhro.png",
  "16",
  "La suerte, la prosperidad y la transformación interior son aspectos muy positivos que esta runa te revela."
);
cartas[17] = new Carta(
  "Dagaz",
  "imagenes/Dagaz.png",
  "17",
  "Si eres capaz de integrar los opuestos que hay en ti, tendrás una importante renovación y evolución. Alcanzarás una mayor libertad y madurez."
);
cartas[18] = new Carta(
  "Eihwaz",
  "imagenes/Eihwaz.png",
  "18",
  "En este momento cuentas con la solidez y la estabilidad necesarias para actuar. Si es así, es un momento excelente para conseguir lo que te propongas. Estás en un buen momento."
);
cartas[19] = new Carta(
  "Algiz",
  "imagenes/Algiz.png",
  "19",
  "Aunque cuentas con una gran protección, no confíes ciegamente en los demás. Corres el riesgo de entregarte a quien no debes y de sufrir descalabros afectivos y profesionales."
);
cartas[20] = new Carta(
  "Othila",
  "imagenes/Othila.png",
  "20",
  "Si quieres avanzar, sólo tienes que actuar de forma diferente. Ábrete a la creatividad y se manifestará justo lo que necesitas para alcanzar la felicidad."
);
cartas[21] = new Carta(
  "Sigel",
  "imagenes/Sigel.png",
  "21",
  "Con la fuerza del rayo de tu voluntad inquebrantable conseguirás manifestar cosas inimaginables."
);
cartas[22] = new Carta(
  "Laguz",
  "imagenes/Laguz.png",
  "22",
  "Eres una persona satisfecha que sabe conectar consigo misma y con recursos internos. Es muy importante para ti encontrar momentos en soledad junto a la naturaleza."
);
cartas[23] = new Carta(
  "Inguz",
  "imagenes/Inguz.png",
  "23",
  "Cuentas con los recursos necesarios para gestar, exponer y poner en marcha nuevos proyectos.  Tu capacidad para relacionarte, te ayudará a lograr tus metas."
);
cartas[24] = new Carta(
  "Uruz",
  "imagenes/Uruz.png",
  "24",
  "Tener creatividad y una intensa vida sexual no tienen nada malo. Sin embargo, el exceso te puede provocar un descenso de la energía y la dispersión mental"
);
cartas[25] = new Carta(
  "Odín",
  "imagenes/Odín.png",
  "25",
  "Todo lo que comienza tiene un fin y todo lo que termina tiene un inicio, acepta aquello que en la vida es inevitable. observa más allá de tus creencias y tus deseos existenciales. ¡Camina más allá tus expectativas!"
);

function crearcarta(num, cartanumero, jugador, cartaenpantalla) {
  let titulo = document.createElement("h2");
  titulo.appendChild(
    document.createTextNode(jugador.value + " " + cartaenpantalla + "/3")
  );
  cartanumero.appendChild(titulo);
  let divCard = document.createElement("div");
  divCard.classList.add("divCard");
  let imagen = document.createElement("img");
  imagen.src = cartas[num].imagen;
  divCard.appendChild(imagen);
  let nom = document.createElement("h3");
  nom.appendChild(document.createTextNode(cartas[num].nombre));
  divCard.appendChild(nom);
  let leyenda = document.createElement("p");
  leyenda.appendChild(document.createTextNode(cartas[num].leyenda));
  divCard.appendChild(leyenda);
  cartanumero.appendChild(divCard);
}

function crearpronostico() {
  carta1.innerHTML = ``;
  carta2.innerHTML = ``;
  carta3.innerHTML = ``;
  carta4.innerHTML = ``;
  carta5.innerHTML = ``;
  carta6.innerHTML = ``;
  cartasElegidas[1] = cartasElegidas[2];
  while (
    cartasElegidas[1] == cartasElegidas[2] ||
    cartasElegidas[2] == cartasElegidas[3] ||
    cartasElegidas[1] == cartasElegidas[3]
  ) {
    cartasElegidas[1] = Math.floor(Math.random() * (25 - 1)) + 1;
    cartasElegidas[2] = Math.floor(Math.random() * (25 - 1)) + 1;
    cartasElegidas[3] = Math.floor(Math.random() * (25 - 1)) + 1;
  }
  cartasElegidas[4] = cartasElegidas[5];
  while (
    cartasElegidas[4] == cartasElegidas[5] ||
    cartasElegidas[5] == cartasElegidas[6] ||
    cartasElegidas[4] == cartasElegidas[6]
  ) {
    cartasElegidas[4] = Math.floor(Math.random() * (25 - 1)) + 1;
    cartasElegidas[5] = Math.floor(Math.random() * (25 - 1)) + 1;
    cartasElegidas[6] = Math.floor(Math.random() * (25 - 1)) + 1;
  }
  crearcarta(cartasElegidas[1], carta1, jugador1, 1);
  crearcarta(cartasElegidas[2], carta2, jugador1, 2);
  crearcarta(cartasElegidas[3], carta3, jugador1, 3);

  crearcarta(cartasElegidas[4], carta4, jugador2, 1);
  crearcarta(cartasElegidas[5], carta5, jugador2, 2);
  crearcarta(cartasElegidas[6], carta6, jugador2, 3);
}
