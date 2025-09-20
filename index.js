//====Variables=====//
var arreglo = [1, 2, 3, 4, 5];
var entero = 1;
var cadena_texto = "Hola Mundo";
var booleano = true;

//===Constantes====//
const PI = 3.1416;


//====Funciones====//
function suma(x, y){
    var resultado = x + y;
    console.log("El resultado de la suma es: " + resultado);
    return resultado;
}

function imprimirMensaje(mensaje){
    console.log("Este es mi mensaje " + mensaje);
}

imprimirMensaje("Hola");
imprimirMensaje("Vacaciones 1 semana :D");
imprimirMensaje(true);

suma(1, 2);
suma(10, 20);
suma(100, 200);


//===Elementos de la pagina como variables===///
var botonBuscar = document.getElementById("buscar");

console.log(botonBuscar);

//==== Eventos===== //
botonBuscar.addEventListener("click", function(){
    //alert("Hiciste clic al boton");
    botonBuscar.classList.add("rojo");
});

//==== Variables de ejercicios de clase ===== //
var mas = document.getElementById("mas");
var verTodos = document.getElementById("verTodos");
var verFotos = document.getElementById("verFotos")
var posts = document.getElementById("posts");
var fotos = document.getElementById("imagenes");

//==== Eventos de cada elemento ===== //
mas.addEventListener("click", function(){
    alert("Sección en progreso...");
});

verTodos.addEventListener("click", function(){
    if(posts.classList.contains("ocultar")){
        posts.classList.remove("ocultar");
        posts.classList.add("mostrar");
    } else {
        posts.classList.remove("mostrar");
        posts.classList.add("ocultar");
    }
});

verFotos.addEventListener("click", function(){
    if(fotos.classList.contains("ocultar")){
        fotos.classList.remove("ocultar");
        fotos.classList.add("mostrar");
    } else {
        fotos.classList.remove("mostrar");
        fotos.classList.add("ocultar");
    } //prueba, cambiar a mostrar por intervalos de tiempo
});