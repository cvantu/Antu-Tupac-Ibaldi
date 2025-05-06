const imagen = document.querySelector("img");

function mostrarVisible(){
    imagen.classList.remove('imagen-oculta');
    imagen.classList.add('imagen-visible');
}

    
    
    document.addEventListener("DOMContentLoaded", function () {
        const headers = document.querySelectorAll("h2");

        headers.forEach(header => {
            header.addEventListener("click", function () {
                this.classList.toggle("activo"); // Cambia color y fondo

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
   