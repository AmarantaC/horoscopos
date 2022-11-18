const botonDatos = document.getElementById("botonDatos");
botonDatos.addEventListener("click", formularioDatos); 

let nombre = '';
let fecha = '';
let dia = '';
let mes = '';
let fechaValidar = '';

function formularioDatos(){
    datos = document.createElement("div");
    datos.innerHTML= `
    <form id="formDatos" class="datos" name="datos">      
        <div class="inputs">            
            <i id="cerrar" class="material-symbols-outlined cerrar">close</i>
            <div class="input_area">
                <label class="label" for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" class="input">                
            </div>                      
            <div class="input_area">
                <label class="label" for="fecha">Fecha de Nacimiento:</label>
                <input type="date" id="fecha" name="fecha" class="input">
            </div>
            <div id="errorDatos"></div>
            <input type="submit" id="enviar" value="Enviar">
        </div>       
    </form>
    `
    datos.classList.add("formulario");
    form.appendChild(datos);
    form.removeChild(botonInicio);

    const botonCerrar = document.getElementById("cerrar");
    botonCerrar.addEventListener("click", ()=>{
        form.removeChild(datos);
        form.appendChild(botonInicio);
    });  
    
    const formDatos = document.getElementById("formDatos");
    formDatos.addEventListener("submit", (e)=>{    
        
        nombre = document.getElementById("nombre").value;
        fecha = new Date (document.getElementById("fecha").value);
        dia = fecha.getDate()+1;
        mes = fecha.getMonth()+1;
        e.preventDefault(); 
                                          
        validacion(e);
        
    }) 
}

function validacion(e){
   
    if ((nombre === '')||!(Date.parse(fecha)>= 1)){
        e.preventDefault(); 
        errorDatos();
        formDatos.reset();
    }else{
        bienvenida();
    } 
}

function errorDatos(){                            
    let errorDatos = document.getElementById("errorDatos");            
    error = document.createElement("p");
    error.classList.add("errorMensaje");
    error.innerText=`
    Ingrese sus datos
    `
    let errores = document.getElementsByClassName("errorMensaje")

    if( errores.length == 0){    
        errorDatos.appendChild(error);            
    }                         
}





