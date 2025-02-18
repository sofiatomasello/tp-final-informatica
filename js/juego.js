const preguntas = [
  { pregunta: "¿Cuál es la capital de Italia?", opciones: ["Roma", "Milán", "Venecia"], correcta: "Roma" },
  { pregunta: "¿Qué forma tiene Italia en un mapa?", opciones: ["Forma de un sombrero", "Forma de una estrella", "Forma de una bota"], correcta: "Forma de una bota" },
  { pregunta: "¿Qué monumento famoso está inclinado?", opciones: ["Torre Eiffel", "Torre de Pisa", "Torre de Londres"], correcta: "Torre de Pisa" },
  { pregunta: "¿Qué colores tiene la bandera italiana?", opciones: ["Rojo, blanco y azul", "Verde, blanco y rojo", "Amarillo, blanco y verde"], correcta: "Verde, blanco y rojo" },
  { pregunta: "¿Qué región italiana es famosa por producir vino Chianti?", opciones: ["Toscana", "Piamonte", "Lombardía"], correcta: "Toscana" },
  { pregunta: "¿Qué dulce italiano es conocido como un postre helado de leche y crema?", opciones: ["Gelato", "Tiramisú", "Panna Cotta"], correcta: "Gelato" },
  { pregunta: "¿En qué ciudad italiana se encuentra el Coliseo?", opciones: ["Roma", "Florencia", "Nápoles"], correcta: "Roma" },
  { pregunta: "¿Qué movimiento artístico nació en Italia durante el siglo XIV?", opciones: ["Romanticismo", "Renacimiento", "Barroco"], correcta: "Renacimiento" },
  { pregunta: "¿Qué famoso plato italiano se originó en Nápoles?", opciones: ["Pizza", "Espaguetis", "Risotto"], correcta: "Pizza" },
  { pregunta: "¿Cuál es la capital de la moda en Italia?", opciones: ["Roma", "Milán", "Venecia"], correcta: "Milán" },
  { pregunta: "¿Qué isla italiana es conocida por su lujo y paisajes paradisíacos?", opciones: ["Capri", "Sicilia", "Elba"], correcta: "Capri" },
  { pregunta: "¿Qué famoso artista pintó el techo de la Capilla Sixtina?", opciones: ["Leonardo da Vinci", "Miguel Ángel", "Rafael"], correcta: "Miguel Ángel" },
  { pregunta: "¿Qué mar rodea a Italia?", opciones: ["Mar Caribe", "Mar Mediterráneo", "Mar del Norte"], correcta: "Mar Mediterráneo" },
  { pregunta: "¿Qué famoso cuadro de Leonardo da Vinci se encuentra en Italia?", opciones: ["La Última Cena", "Mona Lisa", "La Virgen de las Rocas"], correcta: "La Última Cena" },
  { pregunta: "¿Qué ciudad italiana es famosa por sus canales?", opciones: ["Venecia", "Milán", "Génova"], correcta: "Venecia" }
];


// Variables para llevar el seguimiento del juego
let preguntaActual = 0; // Índice de la pregunta actual.
let puntaje = 0; // Puntaje del jugador.

var contenedorJuego = document.getElementById("contenedorJuego"); // Contenedor del juego
contenedorJuego.style.display = "none"; // El juego comienza oculto
var botonJugar = document.getElementById("botonJugar"); // Boton para empezar el juego
var temporizadorHtml = document.getElementById("temporizador"); // Contador de segundos en pantalla
let temporizadorActivo = true; // Activar/Desactivar el conteo de segundos 

// Referencias a los elementos HTML.
const preguntastrivia = document.getElementById("preguntaHtml");
const opcionestrivia= document.getElementById("opcionesHtml");
const resultado = document.getElementById("resultadosHtml");
const reiniciarboton = document.getElementById("reinicioHtml");
const tiempoLimiteDeCadaPregunta = 20; // Tiempo en segundos para responder cada pregunta

function comenzarJuego() {
    botonJugar.style.display = "none";
    contenedorJuego.style.display = "flex";
    mostrarPregunta();
    temporizadorSonido.play();
}

// // Función para mostrar la pregunta actual enn pantalla
function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];
    preguntastrivia.textContent = pregunta.pregunta;
    opcionestrivia.innerHTML = ""; // Limpia opciones anteriores

    

   //  // Genera botones para cada opción de respuesta
   pregunta.opciones.forEach(function(opcion) {
    const button = document.createElement("button");
    button.textContent = opcion;
    button.onclick = function() {
        verificarRespuesta(opcion);
    };
    opcionestrivia.appendChild(button);

    comenzarTemporizador();
});
}

// Función para verificar si la respuesta seleccionada es correcta.
function verificarRespuesta(opcionSeleccionada) {
    const pregunta = preguntas[preguntaActual];
    const botones = opcionestrivia.querySelectorAll("button");

   // Cambia los estilos de los botones según si son correctos o no.
botones.forEach(function(boton) {
    if (boton.textContent === pregunta.correcta) {
        boton.style.backgroundColor = "green"; // Resalta la respuesta correcta en verde.
        boton.style.color = "white"; // Resalta la respuesta correcta en verde.
    } else {
        boton.style.backgroundColor = "red"; // Resalta las respuestas incorrectas en rojo.
        boton.style.color = "white"; // Resalta la respuesta correcta en verde.
    }
    boton.disabled = true; // Deshabilita los botones después de seleccionar.
});

     // Si la respuesta es correcta, suma un puntooo
    if (opcionSeleccionada === pregunta.correcta) {
        puntaje++;
        aciertoSonido.play();
    } else {
        errorSonido.play();
    }
 
    // Parar el temporizador para que no siga bajando mientras vemos el resultado
    temporizadorActivo = false;
    
    // Espera un segundo antes de mostrar la siguiente pregunta.
    setTimeout(function() {
        preguntaActual++;

    // Si hay más preguntas, continúa el juego; si no, muestra el resultado final
        if (preguntaActual < preguntas.length) {
            mostrarPregunta();
        } else {
            mostrarResultado();
        }
    }, 1000); // Espera 1 segundo para que el jugador vea los colores antes de continuar
}


// Función para mostrar el resultado final del juego.
function mostrarResultado() { 
    temporizadorSonido.pause(); // Para el sonido
    temporizadorSonido.currentTime = 0; // Reinicia su tiempo a 0 para que empiece desde el comienzo la proxima vez

    preguntastrivia.style.display = "none";
    opcionestrivia.style.display = "none";

    let mensajeFinal = "";

    if (puntaje === preguntas.length) {
        mensajeFinal = "¡Felicidades! Has acertado todas las preguntas";
        winSonido.play();
    } else {
        mensajeFinal = "¡Sigue practicando y mejora tu puntuación!";
        loseSonido.play();
    }

    resultado.innerHTML = 
        "<h2>Juego terminado</h2>" +
        "<p>Tu puntaje es: <strong>" + puntaje + "</strong> de <strong>" + preguntas.length + "</strong></p>" + 
        "<p>" + mensajeFinal + "</p>";

    reiniciarboton.style.display = "block";
    temporizadorHtml.style.display = "none";
}

// Función para reiniciar el juego
reiniciarboton.onclick = function() {
    preguntaActual = 0;
    puntaje = 0;
    preguntastrivia.style.display = "block";
    opcionestrivia.style.display = "flex";
    resultado.textContent = "";
    reiniciarboton.style.display = "none";
    temporizadorHtml.style.display = "block";
    mostrarPregunta();
    temporizadorSonido.play();
};

/* Temporizador =============== */
var tiempoRestante = 10;
var tiempoIntervalo;

function comenzarTemporizador() {
    clearInterval(tiempoIntervalo);
    temporizadorActivo = true;
    tiempoRestante = 10;
    temporizadorHtml.textContent = tiempoRestante;
    tiempoIntervalo = setInterval(function() {
        if(temporizadorActivo) {
            tiempoRestante = tiempoRestante - 1;
            temporizadorHtml.textContent = tiempoRestante;
            if (tiempoRestante <= 0) {
                clearInterval(tiempoIntervalo);
                verificarRespuesta("");
            }
        }
    }, 1000);
}

/* ============================ */

/* Sonidos ==================== */
const temporizadorSonido = new Audio("sonidos/temporizador.wav");
temporizadorSonido.loop = true; // Si termina vuelve a empezar
temporizadorSonido.volume = 0.5; // Ajustar volumen (0.0 a 1.0)

const errorSonido = new Audio("sonidos/error.mp3");
errorSonido.volume = 0.5; // Ajustar volumen (0.0 a 1.0)

const aciertoSonido = new Audio("sonidos/acierto.wav");
aciertoSonido.volume = 0.5; // Ajustar volumen (0.0 a 1.0)


const winSonido = new Audio("sonidos/win.wav");
winSonido.volume = 0.5; // Ajustar volumen (0.0 a 1.0)

const loseSonido = new Audio("sonidos/perdiste.wav");
loseSonido.volume = 0.5; // Ajustar volumen (0.0 a 1.0)