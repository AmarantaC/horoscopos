let botonSigno = '';
let signoClick = {};
function otrosSignos(){
    fetch(horoscopos)
.then(respuesta => respuesta.json())
.then(signos => {

    menuOtrosSignos(signos); 
      
})                      
.catch(error => console.log(error))
.finally(() => console.log("Proceso Finalizado")
);    
}
function menuOtrosSignos(signos){
    menuSignos = document.createElement("div");
    menuSignos.innerHTML= `
    <div class="caja imagen">
        <img src="img/zodiaco.png">
    </div>
    <div class="caja texto botones" id="signosMenu">
    </div>
    <div class="botones" id="botonesInicio">
        <div class="boton" id="regresar">Regresar</div>    
    </div>    
    `   
    seccion.removeChild(usuarioBienvenida);
    menuSignos.classList.add("otrosSignos");                
    seccion.appendChild(menuSignos);  
    let signosMenu = document.getElementById("signosMenu");

    signos.forEach(signo => {
        signosMenu.innerHTML += `<div class="boton signo" id="${signo.nombre}">${signo.nombre}</div>` 
    });

    for (let signo of signos){
        botonSigno = document.getElementById(`${signo.nombre}`);
        botonSigno.addEventListener("click", ()=>{
            
            signoClick = signo;
            console.log(signoClick);
            otroSigno();

        });                
    }

    const botonRegresar = document.getElementById("regresar");
    botonRegresar.addEventListener("click", ()=>{
        seccion.appendChild(usuarioBienvenida);
        seccion.removeChild(menuSignos);
    })

}
function otroSigno(){
    signoElegido = document.createElement("div");
    signoElegido.innerHTML= `
        <div class="caja imagenUsuario" id="imagenSigno">
            <img src="img/inicio1.png" alt="${signoClick.nombre}">
        </div>
        <div class="caja texto">
            <h1><strong>${signoClick.nombre}</strong></h1>
            <p>${signoClick.mensaje}</p>  
        </div>            
        <div class="botones" id="botonesInicio">
            <div class="boton" id="regresar">Regresar</div>    
        </div>     
        `
    seccion.removeChild(menuSignos);
    signoElegido.classList.add("usuario");                
    seccion.appendChild(signoElegido);
    
    let imagen = document.getElementById("imagenSigno");
    imagen.style.backgroundImage = `url(${signoClick.img})`;

    const botonRegresar = document.getElementById("regresar");
    botonRegresar.addEventListener("click", ()=>{
        seccion.appendChild(menuSignos);
        seccion.removeChild(signoElegido);
    })                                    
}

