//Sistemas existentes

class SistemaPlanetario {
    constructor (sistema, esquirla, investidura, libros) {
        this.sistema = sistema;
        this.esquirla = esquirla;
        this.investidura = investidura;
        this.libros = libros;
    }
}

let sistemaP = []
sistemaP.push(new SistemaPlanetario("Scadrial", "Conservación, Ruina, Armonía", "Alomancia, Feruquimia, Hemalurgia", "Saga Mistborn"))
sistemaP.push(new SistemaPlanetario("Sel", "Devoción, Dominio", "AonDor, ChaySan, Dakhor, Forgery, Bloodsealing", "Elantris"))
sistemaP.push(new SistemaPlanetario("Nalthis", "Dotación", "Awakening", "Warbreaker"))
sistemaP.push(new SistemaPlanetario("Taldain", "Autonomía", "Sand mastery", "White Sand"))
sistemaP.push(new SistemaPlanetario("Roshar", "Honor, Cultivación, Odium", "Surgebinding", "Saga The Stormlight Archive"))
sistemaP.push(new SistemaPlanetario("Threnody", "Ambición", "Sombras", "Shadows for Silence in the Forests of Hell"))
sistemaP.push(new SistemaPlanetario("Drominad", "Ninguna", "Desconocida", "Sixth of the Dusk"))



//Mostrar sistemas existentes

let clickBotonS = [scadrialB, selB, nalthisB, taldainB, rosharB, threnodyB, drominadB]

let boton = document.getElementsByClassName("botonS")
for(let i=0; i< boton.length; i++) {
    boton[i].addEventListener("click", clickBotonS[i])
}


function scadrialB() {
    showSistema(0)
}
function selB() {
    showSistema(1)
}
function nalthisB() {
    showSistema(2)
}
function taldainB() {
    showSistema(3)
}
function rosharB() {
    showSistema(4)
}
function threnodyB() {
    showSistema(5)
}
function drominadB() {
    showSistema(6)
}


function showSistema(i) {
    let infoSistema = document.getElementById("sistemasDisp")
    infoSistema.innerHTML =
        `<div id="sistemasDisp">
        <h3>Sistema: ${sistemaP[i].sistema}</h3>
        <p>Esquirla: ${sistemaP[i].esquirla}</p>
        <p>Investidura: ${sistemaP[i].investidura}</p>
        <p>Libros: ${sistemaP[i].libros}</p>
        </div>
        `
}





//Crear Sistemas

class SistemaCreado {
    constructor (sistema, esquirla, investidura, libros) {
        this.sistema = sistema;
        this.esquirla = esquirla;
        this.investidura = investidura;
        this.libros = libros;
    }
}


class BotonCreado {
    constructor (i) {
        this.i = i;
    }

    botonesCreados() {
        showCreado(this.i)
    }
}


let crear = document.getElementById("crear")

let guardar = document.getElementById("crear")
guardar.addEventListener("submit", saveCreado)


let entrada = []
let bCreados = []
let entradaJSON

let num = -1



function saveCreado(e) {
    entrada.push(new SistemaCreado(document.getElementById("sistema").value, document.getElementById("esquirla").value, document.getElementById("investidura").value, document.getElementById("libros").value))

    entradaJSON = JSON.stringify(entrada)
    sessionStorage.setItem("entrada1", entradaJSON)


    num ++
    bCreados.push(new BotonCreado(num))


    let crearSistema = document.getElementById("crearSistema")
    let sistemaCreado = document.getElementById("sistemaCreado")
    let botonC = document.createElement("div")
    botonC.innerHTML = 
        `<button class="botonC">${document.getElementById("sistema").value}</button>
        `
    crearSistema.insertBefore(botonC, sistemaCreado)

    e.preventDefault()
}



//Mostrar sistemas creados

let botonesC = document.getElementsByClassName("botonC")
for(let i=0; i < botonesC.length; i++) {
    botonesC[i].addEventListener("click", bCreados[i].botonesCreados)
}


function showCreado(i) {
    let creado = JSON.parse(sessionStorage.getItem("entrada"))

    let infoCreado = document.getElementById("sistemaCreado")
    infoCreado.innerHTML =
        `<div id="sistemaCreado">
        <h3>Sistema: ${creado[i].sistema}</h3>
        <p>Esquirla: ${creado[i].esquirla}</p>
        <p>Investidura: ${creado[i].investidura}</p>
        <p>Libros: ${creado[i].libros}</p>
        </div>
        `
}