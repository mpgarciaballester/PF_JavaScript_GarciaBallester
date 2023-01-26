//Sistemas existentes

class SistemaPlanetario {
    constructor (sistema, esquirla, investidura, libros, logo) {
        this.sistema = sistema;
        this.esquirla = esquirla;
        this.investidura = investidura;
        this.libros = libros;
        this.logo = logo;
    }
}

let sistemaP = []
sistemaP.push(new SistemaPlanetario("Sel", "Devoción, Dominio", "AonDor, ChaySan, Dakhor, Forgery, Bloodsealing", "Saga Elantris", "sel1.svg"))
sistemaP.push(new SistemaPlanetario("Scadrial", "Conservación, Ruina, Armonía", "Alomancia, Feruquimia, Hemalurgia", "Saga Nacidos de la Bruma", "scadrial1.svg"))
sistemaP.push(new SistemaPlanetario("Roshar", "Honor, Cultivación, Odium", "Surgebinding", "Saga El Archivo de las Tormentas", "roshar1.svg"))
sistemaP.push(new SistemaPlanetario("Nalthis", "Dotación", "Despertar", "El Aliento de los Dioses", "nalthis1.svg"))
sistemaP.push(new SistemaPlanetario("Taldain", "Autonomía", "Sand mastery", "White Sand", "taldain1.svg"))
sistemaP.push(new SistemaPlanetario("Threnody", "Ambición", "Sombras", "Sombras por Silencio en los Bosques del Infierno", "threnody1.svg"))
sistemaP.push(new SistemaPlanetario("Drominad", "Ninguna", "Desconocida", "Sexto del Ocaso", "drominad1.svg"))


//Mostrar sistemas existentes

let boton = document.getElementsByClassName("botonS")
for(let i=0; i< boton.length; i++) {
    boton[i].addEventListener("click", () => {
        Swal.fire({
            imageUrl: "./images/"+sistemaP[i].logo,
            imageWidth: "150px",
            html: `<div class="sistemasDisp">
            <h3>Sistema: ${sistemaP[i].sistema}</h3>
            <p>Esquirla: ${sistemaP[i].esquirla}</p>
            <p>Investidura: ${sistemaP[i].investidura}</p>
            <p>Libros: ${sistemaP[i].libros}</p>
            </div>
            `,
            background: "#F2ECDF",
            showCloseButton: true,
            showConfirmButton: false,
            
        })
    })
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

let entrada = []
let entradaJSON
let creados
let botonC
let botonesC = []

let crear = document.getElementById("crear")
crear.addEventListener("submit", saveCreado)


function saveCreado(e) {
    entrada.push(new SistemaCreado(document.getElementById("sistema").value, document.getElementById("esquirla").value, document.getElementById("investidura").value, document.getElementById("libros").value))

    entradaJSON = JSON.stringify(entrada)
    localStorage.setItem("entrada", entradaJSON)

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'Coderhouse',
            body: entradaJSON,
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then( (res) => res.json())
        .then( (data) => {
            creados = JSON.parse(data.body)

            let sistemaCreado = document.getElementById("sistemaCreado")
            botonC = document.createElement("button")
            botonC.className = `botonC`
            botonC.innerHTML = 
                `${creados[creados.length - 1].sistema}
                `
            sistemaCreado.appendChild(botonC)

            botonesC = document.getElementsByClassName("botonC")

            for(let i=0; i< botonesC.length; i++) {
                botonesC[i].addEventListener("click", () => {
                    Swal.fire({
                        html: `<div class="sistemasDisp">
                        <h3>Sistema: ${creados[i].sistema}</h3>
                        <p>Esquirla: ${creados[i].esquirla}</p>
                        <p>Investidura: ${creados[i].investidura}</p>
                        <p>Libros: ${creados[i].libros}</p>
                        </div>
                        `,
                        background: "#F2ECDF",
                        showCloseButton: true,
                        showConfirmButton: false
                    })
                })
            }
    
        })

    e.preventDefault()
}





//Libros leidos


//Cargar marcados

let librosLeidos = JSON.parse(localStorage.getItem("libros"))
for(let i=0; i<librosLeidos.length; i++) {
    document.querySelectorAll('input[type=checkbox]')[i].checked = librosLeidos[i];
}


//Guardar

let guardar = document.getElementById("guardar")
guardar.addEventListener("click", guardado)

let libros = document.querySelectorAll('input[type=checkbox]')
let librosC = document.querySelectorAll('input[type=checkbox]:checked')


function guardado(e) {
    //guardar marcados

    let librosMarcados = []
    for(let i = 0; i<libros.length; i++) {
        librosMarcados.push(libros[i].checked)
    }
    librosJSON = JSON.stringify(librosMarcados)
    localStorage.setItem("libros", librosJSON)


    //felicidades toast

    let elantris = document.getElementsByClassName("elantris")
    let elantrisC = document.querySelectorAll('.elantris:checked')

    let mistborn = document.getElementsByClassName("mistborn")
    let mistbornC = document.querySelectorAll('.mistborn:checked')

    let stormlight = document.getElementsByClassName("stormlight")
    let stormlightC = document.querySelectorAll('.stormlight:checked')

    if(librosC.length == libros.length) {
        Cosmere.fire({})
    } else if(elantrisC.length == elantris.length) {
        Elantris.fire({})
        .then(() => {
            if(mistbornC.length == mistborn.length) {
                Mistborn.fire({})
                .then(() => {
                    stormlightC.length == stormlight.length && Stormlight.fire({})
                })
            } else {
                stormlightC.length == stormlight.length && Stormlight.fire({})
            }
        })
    } else if(mistbornC.length == mistborn.length) {
        Mistborn.fire({})
        .then(() => {
            stormlightC.length == stormlight.length && Stormlight.fire({})
        })
    } else {
        stormlightC.length == stormlight.length && Stormlight.fire({})
    }
    
    e.preventDefault()
}


//Toasts

const Toast = Swal.mixin({
    toast: true,
    imageWidth: "100px",
    timer: 2500,
    timerProgressBar: true,
    showConfirmButton: false,
    background: '#FFFCF5',
})

const Cosmere = Toast.mixin({
    imageUrl: "./images/cosmere1.svg",
    html: `<p id="toast">¡Felicidades! Ya leíste todos los libros publicados del Cosmere</p>`,
})

const Elantris = Toast.mixin({
    imageUrl: "./images/"+sistemaP[0].logo,
    html: `<p id="toast">¡Felicidades! Ya leíste todos los libros de la saga Elantris</p>`,
})

const Mistborn = Toast.mixin({
    imageUrl: "./images/"+sistemaP[1].logo,
    html: `<p id="toast">¡Felicidades! Ya leíste todos los libros de la saga Nacidos de la Bruma</p>`,
})

const Stormlight = Toast.mixin({
    imageUrl: "./images/"+sistemaP[2].logo,
    html: `<p id="toast">¡Felicidades! Ya leíste todos los libros de la saga El Archivo de las Tormentas</p>`,
})