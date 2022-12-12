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


let numero = prompt("Ingresá el número del sistema planetario que querés explorar (del 1 al 7)")

while(numero != "esc") {
    switch (Number(numero)) {
        case 1:
            infoSistema(0);
            break;
        case 2:
            infoSistema(1);
            break;
        case 3:
            infoSistema(2);
            break;
        case 4:
            infoSistema(3);
            break;
        case 5:
            infoSistema(4);
            break;
        case 6:
            infoSistema(5);
            break;
        case 7:
            infoSistema(6);
            break;
        default:
            console.log("Solo hay 7 sistemas planetarios conocidos en el Cosmere");
            break;
    }
    numero = prompt("Ingresá el número del sistema planetario que querés explorar (del 1 al 7)")
}

function infoSistema(i) {
    console.log("Sistema: " + sistemaP[i].sistema)
    console.log("Esquirla: " + sistemaP[i].esquirla)
    console.log("Investidura: " + sistemaP[i].investidura)
    console.log("Libros: " + sistemaP[i].libros)
}


let entrada = []
entrada.push(prompt("Creá tu propio sistema: Primero, ingresá el nombre"))
entrada.push(prompt("Ahora, ingresá la esquirla"))
entrada.push(prompt("Luego, la investidura"))
entrada.push(prompt("Por último, inventá un título para un posible libro que transcurra en este sistema planetario"))

sistemaCreado()


function sistemaCreado() {
    console.log("Sistema: " + entrada[0])
    console.log("Esquirla: " + entrada[1])
    console.log("Investidura: " + entrada[2])
    console.log("Libros: " + entrada[3])
}


let entrada2 = []
let qa = prompt("¿Querés crear otro sistema? si/no")

if(qa == "si") {
    entrada2.push(prompt("Creá tu propio sistema: Primero, ingresá el nombre"))
    entrada2.push(prompt("Ahora, ingresá la esquirla"))
    entrada2.push(prompt("Luego, la investidura"))
    entrada2.push(prompt("Por último, inventá un título para un posible libro que transcurra en este sistema planetario"))

    sistemaCreado2()
}


function sistemaCreado2() {
    console.log("Sistema: " + entrada2[0])
    console.log("Esquirla: " + entrada2[1])
    console.log("Investidura: " + entrada2[2])
    console.log("Libros: " + entrada2[3])
}