let ataqueJugador 
let AtaqueAleatorioEnemigo

function iniciarJuego() {
  let botonMascota = document.getElementById("boton-mascota");
  botonMascota.addEventListener("click", selecionarMascotaJugador);
 //variables donde se escucha que ataque selecciona el jugador
  let botonFuego = document.getElementById('fuego')
  botonFuego.addEventListener("click", ataqueFuego)

  let botonAgua = document.getElementById('agua')
  botonAgua.addEventListener("click", ataqueAgua)

  let botonPlanta = document.getElementById('planta')
  botonPlanta.addEventListener("click", ataquePlanta)


  let ataque = document.getElementById("ataque")
}

//selecion de mascota
function selecionarMascotaJugador() {
  let charmander = document.getElementById("charmander").checked;
  let squirtle = document.getElementById("squirtle").checked;
  let venasaur = document.getElementById("venasaur").checked;
  let wakala = document.getElementById("wakala").checked;
  let kaka = document.getElementById("kaka").checked;
  let chipa = document.getElementById("chipa").checked;
  let mascotaJugador = document.getElementById("mascota-jugador")
  

  if (charmander == true) {
    mascotaJugador.innerHTML = "charmander"
  } else if (squirtle == true) {
    mascotaJugador.innerHTML = "squirtle";
  } else if (venasaur == true) {
    mascotaJugador.innerHTML = "venasaur"
  } else if (wakala == true) {
    mascotaJugador.innerHTML = "Wakala"
  } else if (kaka == true) {
    mascotaJugador.innerHTML = "kaka"
  } else if (chipa == true) {
    mascotaJugador.innerHTML = "chipa"
  } else{
    alert("Seleccione una mascota")
  }

    mascotaEnemigo()
    
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


function ataqueFuego(){
  ataqueJugador = "fuego"
  ataqueAleatorioEnemigo()
}

function ataqueAgua(){
  ataqueJugador = "Agua"
  ataqueAleatorioEnemigo()
}


function ataquePlanta(){
  ataqueJugador = "Planta"
  ataqueAleatorioEnemigo()
}


function ataqueAleatorioEnemigo(){
 let ataqueAleatorio = aleatorio(1,3)

 if (ataqueAleatorio == 1){
  ataqueAleatorioEnemigo = "fuego"
 }else if (ataqueAleatorio == 2){
  ataqueAleatorioEnemigo = "Agua"
 }else if (ataqueAleatorio == 3){
  ataqueAleatorioEnemigo = "Planta"
 }
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
