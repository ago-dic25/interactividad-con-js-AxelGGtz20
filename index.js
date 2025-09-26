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
var tarjetas = document.querySelectorAll(".tarjeta");

console.log(botonBuscar);

//==== Eventos===== //
botonBuscar.addEventListener("click", function(){
    const busqueda = prompt("Escribe tu búsqueda");

    tarjetas.forEach(tarjeta => {
        if (tarjeta.textContent.toLowerCase().includes(busqueda.toLowerCase())) {
            tarjeta.classList.remove("ocultar2"); // se muestra
            tarjeta.classList.add("mostrar2");
        } else {
            tarjeta.classList.add("ocultar2");   // se oculta
            tarjeta.classList.remove("mostrar2");
        }
    });
});

//==== Variables de ejercicios de clase ===== //
var mas = document.getElementById("mas");
var verTodos = document.getElementById("verTodos");
var verFotos = document.getElementById("verFotos")
var posts = document.getElementById("posts");
var fotos = document.getElementById("imagenes");
var toggleButton = document.getElementById("modo-oscuro-toggle");
var likes = 0;

var imagenes = [
  "imagenes/soundtrap-n30_i7mx62o-unsplash.jpg",
  "imagenes/arnel-hasanovic-MNd-Rka1o0Q-unsplash.jpg",
  "imagenes/jukka-aalho-OaPksPcVp50-unsplash.jpg",
  "imagenes/rachel-coyne-mTsotT-gMrY-unsplash.jpg"
];

var seeAll = document.getElementById("seeAll");
var imagenPrincipal = document.getElementById("imagenPrincipal");
var indice = 0;
var intervalo;

//==== Eventos de cada elemento ===== //
/*Desaparecen algunos textos en la foto pero no se como corregirlo :((*/
toggleButton.addEventListener("click", function() {
    if (document.body.classList.toggle("dark-mode")) {
        toggleButton.innerHTML = "☀️";
    } else {
        toggleButton.innerHTML = "🌙";
    }
});

mas.addEventListener("click", function(){
    likes++;
    alert("Likes: " + likes); /*lo muestro mediante una alerta,
    no se si era como las imagenes que se desocultan*/
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

/*verFotos.addEventListener("click", function(){
    if(fotos.classList.contains("ocultar")){
        fotos.classList.remove("ocultar");
        fotos.classList.add("mostrar");
    } else {
        fotos.classList.remove("mostrar");
        fotos.classList.add("ocultar");
    } //prueba, cambiar a mostrar por intervalos de tiempo
});*/

// Al pasar el mouse por el contenedor
seeAll.addEventListener("mouseenter", function() {
  // Evitar que se creen varios intervalos
  if (!intervalo) {
    intervalo = setInterval(function() {
      indice = (indice + 1) % imagenes.length;
      imagenPrincipal.src = imagenes[indice];
    }, 2000);
  }
});

// Al quitar el mouse
seeAll.addEventListener("mouseleave", function() {
  clearInterval(intervalo);
  intervalo = null;
});