const celeste = document.getElementById("celeste")
const violeta = document.getElementById("violete")
const naranja = document.getElementById("naranja")
const verde = document.getElementById("verde")
const btnEmpezar = document.getElementById("btnEmpezar")

class  Juego {
    constructor(){
        this.inicializar()
    }
    inicializar(){
        btnEmpezar.classList.add("hide")
    }

    generarSecuencia(){
        this.secuencia = new Array(10).fill().map( n => Math.floor(Math.random() * 4))
    }
}


function empezarjuego(){
window.juego = new Juego ()
}