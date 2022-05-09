/*---------------------------------------------------------------------
    File Name: formulario.js
---------------------------------------------------------------------*/

//declaracion de variables 
var nombre = document.getElementById(nombres)
var apellidos = document.getElementById(apellidos)
var correo = document.getElementById(correo)
var cuidad = document.getElementById(cuidad)
var region = document.getElementById(region)
var error = document.getElementById(error)



var formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function(rgt){
        rgt.preventDefault();
        var mensajesError = [];

        if (nombres.value === null || nombres.value === ''){
            mensajesError.push('Ingresa tu nombre')
        }



})