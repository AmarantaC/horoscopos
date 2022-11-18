let cartaSuerte = {};
let menuTarot = '';
function leerTarot (){

    menuTarot = document.createElement("div");
    menuTarot.innerHTML = `
        <div class="caja imagenTarot" id="imagenTarot">
            <img src="img/inicio1.png">
        </div>
        <div class="caja texto">
            <h1><strong>${nombre} ELIJE UNA CARTA</strong></h1>
            <div class="caja cartas">
                <div class="carta">
                    <img src="img/carta.jpg"> 
                </div>
                <div class="carta">
                    <img src="img/carta.jpg"> 
                </div>
                <div class="carta">
                    <img src="img/carta.jpg"> 
                </div>
            </div>                        
        </div> 
                                                             
        <div class="botones" id="botonesInicio">
            <div class="boton" id="regresar">Regresar</div>    
        </div>    
        `
    seccion.removeChild(usuarioBienvenida);
    menuTarot.classList.add("tarot");                
    seccion.appendChild(menuTarot);

    /*------ Regresar ------*/
                                 
    const botonRegresar = document.getElementById("regresar");
    botonRegresar.addEventListener("click", ()=>{
        seccion.appendChild(usuarioBienvenida);
        seccion.removeChild(menuTarot);
    })

    let cartasTarot = document.getElementsByClassName("carta");    
    
    for(let i = 0; i < cartasTarot.length; i++){
        cartasTarot[i].addEventListener('click', leerCarta); 
    }    
}
function leerCarta(){

    fetch(tarot)
        .then(respuesta => respuesta.json())
        .then(cartas => {

 
            lectura(cartas);
                                              
    })
    .catch(error => console.log(error))
    .finally(() => console.log("Proceso Finalizado"));
                
}
function lectura(cartas){

    let numSuerte = (Math.round(Math.random() * 11));
    console.log(numSuerte);
    cartaSuerte = cartas.find(carta=> carta.id === numSuerte);  
    console.log(cartaSuerte);

    let cartaElegida = document.createElement("div")
    cartaElegida.innerHTML = `
    <div class="caja imagenCarta" id="imagenCarta">
        <img src=${cartaSuerte.img}>
    </div>
    <div class="caja texto">
        <h1><strong>${cartaSuerte.nombre}</strong></h1>
        <p>${cartaSuerte.mensaje}</p>  
    </div>            
    <div class="botones" id="botonesInicio">
        <div class="boton" id="regresar">Regresar</div>    
    </div>                              
    `
    seccion.removeChild(menuTarot);
    cartaElegida.classList.add("cartaElegida");                
    seccion.appendChild(cartaElegida);

    const botonRegresar = document.getElementById("regresar");
    botonRegresar.addEventListener("click", ()=>{
        seccion.appendChild(usuarioBienvenida);
        seccion.removeChild(cartaElegida);
    })

}