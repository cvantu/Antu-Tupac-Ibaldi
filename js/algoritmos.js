const headers = document.querySelectorAll("h2");
const imagen = document.getElementById("imagen");
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
   