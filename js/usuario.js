let signoUsuario = {};
let usuarioBienvenida = '';
function bienvenida(){
    fetch(horoscopos)
.then(respuesta => respuesta.json())
.then(signos => {

    conocerSigno(signos); 
    horoscopoUsuario();
  
})                      
.catch(error => console.log(error))
.finally(() => console.log("Proceso Finalizado")
);    
}
function conocerSigno(signos){
    for (let Signo of signos){
        if (((dia >= Signo.diaInicio )&&(dia <= Signo.diasMes)&&(mes == Signo.mesInicio))||
        ((dia >= 1 )&&(dia <= Signo.diaFin)&&(mes == Signo.mesFin))){
           signoUsuario = Signo;       
        }       
    }
}

function horoscopoUsuario(){
        usuarioBienvenida = document.createElement("div");
        usuarioBienvenida.innerHTML = `
        <div class="caja imagenUsuario" id="imagenUsuario">
            <img src="img/inicio1.png" alt="${nombre}">
        </div>
        <div class="caja texto">
            <h1>Hola <strong>${nombre}</strong></h1>
            <p>El horoscopo de hoy para <strong>${signoUsuario.nombre}</strong> es:</p> 
            <p>${signoUsuario.mensaje}</p>             
        </div>
        <div class="botones" id="botonesInicio">
            <div class="boton" id="tarot">Tarot</div>
            <div class="boton" id="otrosSignos">Otros Signos</div> 
            <div class="boton" id="salir">Salir</div>    
        </div>
    </div>
    `   
        seccion.removeChild(inicio);
        usuarioBienvenida.classList.add("usuario");                
        seccion.appendChild(usuarioBienvenida); 

        let imagen = document.getElementById("imagenUsuario");
        imagen.style.backgroundImage = `url(${signoUsuario.img})`;
       
        Toastify({
            text: `¡Hola ${nombre}!`,        
            className: "info",
            duration: 4000,
            gravity: "top",
            style: {
                background: "rgba(219, 174, 76, 0.8)",
            },
        }).showToast();

        /*------ Salir ------*/
             
        const botonSalir = document.getElementById("salir")
        botonSalir.addEventListener("click", ()=>{
            location.reload()
        }); 

        const botonSignos = document.getElementById("otrosSignos")
        botonSignos.addEventListener("click", otrosSignos); 

        const botonTarot = document.getElementById("tarot")
        botonTarot.addEventListener("click", leerTarot); 

}


   


