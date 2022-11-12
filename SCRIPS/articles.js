document.addEventListener("DOMContentLoaded", function(e){

    const parrafos = document.querySelectorAll('.articulo-descripcion');

    let alturas = [];
    let alturaMaxima = 0;

    const applicarAlturas = (function applicarAlturas(){

        parrafos.forEach(parrafo =>{

            if(alturaMaxima = 0){
                alturas.push(parrafo.clientHeight);
            }
            else{
                parrafo.style.height = alturaMaxima + "px";
            }
            return (applicarAlturas);;
        });

    })();

    alturaMaxima = Math.max.apply(Math, alturas);

    applicarAlturas();

});