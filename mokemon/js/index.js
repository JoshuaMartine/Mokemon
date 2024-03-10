function iniciarJuego() {
  let botonMascota = document.getElementById("boton-mascota");
  botonMascota.addEventListener("click", selecionarMascotaJugador);
}

function selecionarMascotaJugador() {
  let charmander = document.getElementById("charmander").checked;
  let squirtle = document.getElementById("squirtle").checked;
  let venasaur = document.getElementById("venasaur").checked;
  let wakala = document.getElementById("wakala").checked;
  let kaka = document.getElementById("kaka").checked;
  let chipa = document.getElementById("chipa").checked;

  if (charmander == true) {
    alert("selecionaste a charmander");
  } else if (squirtle == true) {
    alert("selecionast a squirtle");
  } else if (venasaur == true) {
    alert("selecionaste a venasuar");
  } else if (wakala == true) {
    alert("selecionaste a wakala");
  } else if (kaka == true) {
    alert("selecionaste a kaka");
  } else if (chipa == true) {
    alert("selecionaste a chipa");
  } else{
    alert("seleciona una mascota")
  }
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
