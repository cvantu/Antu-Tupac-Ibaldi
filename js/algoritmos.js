const headers = document.querySelectorAll("h2");
const imagen = document.getElementById("imagen");
const imagen2 = document.getElementById("imagen2");
const primerH2 = document.getElementById("primerH2");
let numero= 1

function mostrarVisible(){
    numero= ++numero
    if (numero%2==0)  {
        imagen.classList.remove('imagen-oculta')
        imagen.classList.add('imagen-visible')

    } 
    if (numero%2!=0){
        imagen.classList.remove('imagen-visible')
        imagen.classList.add('imagen-oculta')

    }
}
function mostrarVisible2(){
    numero= ++numero
    if (numero%2==0)  {
        imagen2.classList.remove('imagen-oculta2')
        imagen2.classList.add('imagen-visible2')

    } 
    if (numero%2!=0){
        imagen2.classList.remove('imagen-visible2')
        imagen2.classList.add('imagen-oculta2')

    }
}

document.addEventListener("DOMContentLoaded", function () {
   
    headers.forEach(header => {
        header.addEventListener("click", function () {
            this.classList.toggle("activo");

            let next = this.nextElementSibling;
            while (next && next.tagName !== "H2") {
                if (next.tagName === "P") {
                    next.classList.toggle("oculto");
                }
                next = next.nextElementSibling;
            }

        
        });
    });
});
   