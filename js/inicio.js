/*----- Rutas Json ------*/

const horoscopos = "json/horoscopos.json";
const tarot = "json/tarot.json";

/*------Inicio-----*/

const seccion = document.getElementById("seccion");
const inicio = document.createElement("div");
inicio.innerHTML=`
    <div class="caja imagen">
        <img src="img/inicio1.png">
    </div>
        <div class="caja texto">
            <h1>Descubre el mensaje que tienen los astros para tí</h1>
            <div class="caja" id="form">             
        </div>
    </div>
    `
inicio.classList.add("inicio");
seccion.appendChild(inicio);

    const form = document.getElementById("form");
    const botonInicio = document.createElement("div");
    botonInicio.innerHTML=`
    <div class="botones" id="botonInicio">
        <div class="boton" id="botonDatos">Ingresa tus datos</div>       
    </div>
    `
botonInicio.classList.add("botones");
form.appendChild(botonInicio);       
