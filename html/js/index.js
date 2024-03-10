function aleatorio (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada){
    let resultado = ""
    if(jugada == 1){
        resultado = "Piedra 🥌"
    } else if(jugada == 2){
        resultado = "Papel 📋"
    } else if(jugada == 3){
        resultado = "Tijera ✂"
    } else {
        resultado = "MAL ELEGIDO"
    }
    return resultado
}

function combate(victoriasNecesarias){
    let triunfos = 0
    let derrotas = 0
    let resultado = [triunfos, derrotas]
    let pc = 0
    let jugador = 0

    while (triunfos < victoriasNecesarias && derrotas < victoriasNecesarias) {
        pc = aleatorio (1,3)
        jugador = prompt("Elige: 1 para piedra 🥌, 2 para papel, 3 para ✂ tijera")

        alert("PC elige: " +eleccion(pc))
        alert("Tú eliges: " + eleccion(jugador))

        //COMBATE
        if(pc == jugador){
            alert("EMPATE")
        } else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
            alert("GANASTE")
            triunfos++
        } else {
            alert("PERDISTE")
            derrotas++
        }
    }
    resultado[0] = triunfos
    resultado[1] = derrotas
    return resultado
}

let resultado = [0,0]
resultado = combate(3)
alert ("Ganaste " + resultado[0] + " veces. Perdiste " + resultado[1] + " veces.")