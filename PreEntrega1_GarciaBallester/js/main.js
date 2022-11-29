class SistemaPlanetario {
    constructor (sistema, esquirla, investidura, libros) {
        this.sistema = sistema;
        this.esquirla = esquirla;
        this.investidura = investidura;
        this.libros = libros;
    }
}
const scadrial = new SistemaPlanetario("Scadrial", "Conservación, Ruina, Armonía", "Alomancia, Feruquimia, Hemalurgia", "Saga Mistborn")
const sel = new SistemaPlanetario("Sel", "Devoción, Dominio", "AonDor, ChaySan, Dakhor, Forgery, Bloodsealing", "Elantris")
const nalthis = new SistemaPlanetario("Nalthis", "Dotación", "Awakening", "Warbreaker")
const taldain = new SistemaPlanetario("Taldain", "Autonomía", "Sand mastery", "White Sand")
const roshar = new SistemaPlanetario("Roshar", "Honor, Cultivación, Odium", "Surgebinding", "Saga The Stormlight Archive")
const threnody = new SistemaPlanetario("Threnody", "Ambición", "Sombras", "Shadows for Silence in the Forests of Hell")
const drominad = new SistemaPlanetario("Drominad", "Ninguna", "Desconocida", "Sixth of the Dusk")


let entrada = prompt("Ingresá el número del sistema planetario que querés explorar (del 1 al 7)")


while(entrada != "esc") {
    switch (Number(entrada)) {
        case 1:
            infoSistema(scadrial);
            break;
        case 2:
            infoSistema(sel);
            break;
        case 3:
            infoSistema(nalthis);
            break;
        case 4:
            infoSistema(taldain);
            break;
        case 5:
            infoSistema(roshar);
            break;
        case 6:
            infoSistema(threnody);
            break;
        case 7:
            infoSistema(drominad);
            break;
        default:
            console.log("Solo hay 7 sistemas planetarios conocidos en el Cosmere");
            break;
    }
    entrada = prompt("Ingresá el número del sistema planetario que querés explorar (del 1 al 7)")
}


function infoSistema(sistemaP) {
    console.log("Sistema: " + sistemaP.sistema)
    console.log("Esquirla: " + sistemaP.esquirla)
    console.log("Investidura: " + sistemaP.investidura)
    console.log("Libros: " + sistemaP.libros)
}