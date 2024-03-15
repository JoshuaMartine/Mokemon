
let ataqueJugador;
let AtaqueAleatorioEnemigo;
let vidasJugador = 3
let vidasEnemigas = 3


function iniciarJuego() {
let sectionSeleccionarAtaque = document.getElementById("Seleccionar-ataque")
sectionSeleccionarAtaque.style.display = 'none'


let sectionReiniciar = document.getElementById("button-reiniciar")
sectionReiniciar.style.display = 'none'

  let botonMascota = document.getElementById("boton-mascota");
  botonMascota.addEventListener("click", selecionarMascotaJugador);
  //variables donde se escucha que ataque selecciona el jugador
  let botonFuego = document.getElementById("fuego");
  botonFuego.addEventListener("click", ataqueFuego);

  let botonAgua = document.getElementById("agua");
  botonAgua.addEventListener("click", ataqueAgua);

  let botonPlanta = document.getElementById("planta");
  botonPlanta.addEventListener("click", ataquePlanta);

  let ataque = document.getElementById("ataque");
  let reiniciar = document.getElementById("button-reiniciar")
  reiniciar.addEventListener("click", reiniciarJuego)
}

//selecion de mascota
function selecionarMascotaJugador() {
  let sectionSeleccionarMascota = document.getElementById("Seleccion-mascota")
  sectionSeleccionarMascota.style.display = 'none'
  
  let sectionSeleccionarAtaque = document.getElementById("Seleccionar-ataque")
  sectionSeleccionarAtaque.style.display = 'block'

  let charmander = document.getElementById("charmander").checked;
  let squirtle = document.getElementById("squirtle").checked;
  let venasaur = document.getElementById("venasaur").checked;
  let wakala = document.getElementById("wakala").checked;
  let kaka = document.getElementById("kaka").checked;
  let chipa = document.getElementById("chipa").checked;
  let mascotaJugador = document.getElementById("mascota-jugador");

  if (charmander == true) {
    mascotaJugador.innerHTML = "charmander";
  } else if (squirtle == true) {
    mascotaJugador.innerHTML = "squirtle";
  } else if (venasaur == true) {
    mascotaJugador.innerHTML = "venasaur";
  } else if (wakala == true) {
    mascotaJugador.innerHTML = "Wakala";
  } else if (kaka == true) {
    mascotaJugador.innerHTML = "kaka";
  } else if (chipa == true) {
    mascotaJugador.innerHTML = "chipa";
  } else {
    alert("Seleccione una mascota");
  }

  mascotaEnemigo();
}

function mascotaEnemigo() {
  let mascotaAleatorio = aleatorio(1, 6);
  let mascotaEnemigo = document.getElementById("mascota-enemigo");

  if (mascotaAleatorio == 1) {
    mascotaEnemigo.innerHTML = "charmander";
  } else if (mascotaAleatorio == 2) {
    mascotaEnemigo.innerHTML = "squirtle";
  } else if (mascotaAleatorio == 3) {
    mascotaEnemigo.innerHTML = "venasaur";
  } else if (mascotaAleatorio == 4) {
    mascotaEnemigo.innerHTML = "Wakala";
  } else if (mascotaAleatorio == 5) {
    mascotaEnemigo.innerHTML = "kaka";
  } else if (mascotaAleatorio == 6) {
    mascotaEnemigo.innerHTML = "chipa";
  }
}

function ataqueFuego() {
  ataqueJugador = "fuego";
ataqueEnemigo()
}

function ataqueAgua() {
  ataqueJugador = "Agua";
  ataqueEnemigo()
}

function ataquePlanta() {
  ataqueJugador = "Planta";
  ataqueEnemigo()
}

function ataqueEnemigo() {
  let ataqueAleatorio = aleatorio(1,3);
  if (ataqueAleatorio == 1) {
    AtaqueAleatorioEnemigo = "fuego";
  } else if (ataqueAleatorio == 2) {
    AtaqueAleatorioEnemigo = "Agua";
  } else if (ataqueAleatorio == 3) {
    AtaqueAleatorioEnemigo = "Planta";
  }
  combate();
}

function combate() {
  let spanVidasJugador = document.getElementById('vidas-jugador');
  let spanVidasEnemigo = document.getElementById('vidas-enemigas');

  if (AtaqueAleatorioEnemigo == ataqueJugador) {
    crearMensaje(" EMPATE");
  } else if (
    (AtaqueAleatorioEnemigo == "fuego" && ataqueJugador == "Agua") ||
    (AtaqueAleatorioEnemigo == "Planta" && ataqueJugador == "fuego") || // Cambio aquí
    (AtaqueAleatorioEnemigo == "Agua" && ataqueJugador == "Planta")      // Cambio aquí
  ) {
    crearMensaje(" GANASTE🎉");
    vidasEnemigas--;
    spanVidasEnemigo.innerHTML = vidasEnemigas;
  } else {
    crearMensaje(" PERDISTE😢");
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }
  revisarVidas()
}

function revisarVidas(){
  if (vidasEnemigas == 0){
    crearMensajeFinal("Felicitaciones");
  } else if (vidasJugador == 0){
    crearMensajeFinal("Perdiste");
  }  
}




function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById("mensajes");

  let parrafo = document.createElement("p");
  parrafo.innerHTML =
    "Tu mascota ataco con: " +
    ataqueJugador +
    " Y el enemigo ataco con:" +
    AtaqueAleatorioEnemigo +
    resultado;
  sectionMensajes.appendChild(parrafo);
   
}


function crearMensajeFinal(resultadoFinal) {
  let sectionMensajes = document.getElementById("mensajes");

  let parrafo = document.createElement("p");
  parrafo.innerHTML = resultadoFinal
  sectionMensajes.appendChild(parrafo);

  let botonFuego = document.getElementById("fuego");
   botonFuego.disabled = true

  let botonAgua = document.getElementById("agua");
  botonAgua.disabled = true

  let botonPlanta = document.getElementById("planta");
  botonPlanta.disabled = true

  let sectionReiniciar = document.getElementById("button-reiniciar")
sectionReiniciar.style.display = 'block'

}


function reiniciarJuego(){
  location.reload()
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
//Eventos que podemos escuchar con: addEventListener("")
//blur = Cuando el elemento pierde el foco.
//click = El usuario hace clic sobre el elemento.
//dblclick = El usuario hace doble clic sobre el elemento.
//focus = El elemento gana el foco.
//keydown = El usuario presiona una tecla.
//keypress = El usuario presiona una tecla y la mantiene pulsada.
//keyup = El usuario libera la tecla.
//load = El documento termina su carga.
//mousedown = El usuario presiona el botón del ratón en un elemento.
//mousemove = El usuario mueve el puntero del ratón sobre un elemento.
//mouseout = El usuario mueve el puntero fuera de un elemento.
//mouseover = El usuario mantiene el puntero sobre un elemento.
