//crear un formulario con botones para ingresar informacion a traves de javasscript
//PASO:seleccionar un boton que produzca un evento (ID)
//PASO 02:añadimos un manejador de eventos

document.getElementById("boton").addEventListener("click", function(){

    let nombre = document.getElementById("nombre").value
    let edad = document.getElementById("edad").value
    //mostrar la informacion
    document.getElementById("salida").innerHTML="bienvenido" + nombre + " a nuestra ferreteria CLAVITO y te saludamos " + edad + " años de vida."
})
