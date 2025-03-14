//Trivia sobre Italia

// Array de preguntas para el juegoo de Italia
// Cada objeto en el array contiene:
//pregunta: La pregunta que se va a hacer al usuario.
//opciones: Un array con las opciones de respuesta posibles.
//correcta: La respuesta correcta a la pregunta.

const preguntas = [
  { pregunta: "¿Cuál es la capital de Italia?", opciones: ["Roma", "Milán", "Venecia"], correcta: "Roma" },
  { pregunta: "¿Qué forma tiene Italia en un mapa?", opciones: ["Forma de un sombrero", "Forma de una estrella", "Forma de una bota"], correcta: "Forma de una bota" },
  { pregunta: "¿Qué monumento famoso está inclinado?", opciones: ["Torre Eiffel", "Torre de Pisa", "Torre de Londres"], correcta: "Torre de Pisa" },
  { pregunta: "¿Qué colores tiene la bandera italiana?", opciones: ["Rojo, blanco y azul", "Amarillo, blanco y verde ", "Verde, blanco y rojo"], correcta: "Verde, blanco y rojo" },
  { pregunta: "¿Qué región italiana es famosa por producir vino Chianti?", opciones: ["Toscana", "Piamonte", "Lombardía"], correcta: "Toscana" },
  { pregunta: "¿Qué dulce italiano es conocido como un postre helado de leche y crema?", opciones: ["Gelato", "Tiramisú", "Panna Cotta"], correcta: "Gelato" },
  { pregunta: "¿En qué ciudad italiana se encuentra el Coliseo?", opciones: ["Florencia", "Roma", "Nápoles"], correcta: "Roma" },
  { pregunta: "¿Qué movimiento artístico nació en Italia durante el siglo XIV?", opciones: ["Romanticismo", "Renacimiento", "Barroco"], correcta: "Renacimiento" },
  { pregunta: "¿Qué famoso plato italiano se originó en Nápoles?", opciones: ["Pizza", "Espaguetis", "Risotto"], correcta: "Pizza" },
  { pregunta: "¿Cuál es la capital de la moda en Italia?", opciones: ["Roma", "Venecia", "Milán"], correcta: "Milán" },
  { pregunta: "¿Qué isla italiana es conocida por su lujo y paisajes paradisíacos?", opciones: ["Elba", "Sicilia", "Capri"], correcta: "Capri" },
  { pregunta: "¿Qué famoso artista pintó el techo de la Capilla Sixtina?", opciones: ["Leonardo da Vinci", "Miguel Ángel", "Rafael"], correcta: "Miguel Ángel" },
  { pregunta: "¿Qué mar rodea a Italia?", opciones: ["Mar Caribe", "Mar Mediterráneo", "Mar del Norte"], correcta: "Mar Mediterráneo" },
  { pregunta: "¿Qué famoso cuadro de Leonardo da Vinci se encuentra en Italia?", opciones: ["La Última Cena", "Mona Lisa", "La Virgen de las Rocas"], correcta: "La Última Cena" },
  { pregunta: "¿Qué ciudad italiana es famosa por sus canales?", opciones: ["Génova", "Milán", "Venecia"], correcta: "Venecia" }
];



// Variables para llevar el seguimiento del juego
let preguntaActual = 0; // Índice de la pregunta actual.
let puntaje = 0; // Puntaje del jugador.

let contenedorJuego = document.getElementById("contenedorJuego"); // Contenedor del juego
contenedorJuego.style.display = "none"; // El juego comienza oculto
let botonJugar = document.getElementById("botonJugar"); // Boton para empezar el juego
let temporizadorHtml = document.getElementById("temporizador"); // Contador de segundos en pantalla
let temporizadorActivo = true; // Activar/Desactivar el conteo de segundos 

const preguntastrivia = document.getElementById("preguntaHtml");
const opcionestrivia= document.getElementById("opcionesHtml");
const resultado = document.getElementById("resultadosHtml");
const tiempoLimiteDeCadaPregunta = 15; // Tiempo en segundos para responder cada pregunta





     //Al hacer click
function comenzarJuego() {
     // Oculto el botón de "Jugar" una vez que el jugador comienza el juego.
    botonJugar.style.display = "none";
 // Muestro el contenedor del juego
    contenedorJuego.style.display = "flex";

   // Llamo a la función para mostrar la primera pregunta del juego.
    mostrarPregunta();
    temporizadorSonido.play(); //activo temporizador
    preguntastrivia.style.display = "block"; //muestro preguntas
    opcionestrivia.style.display = "flex"; //Muestro las opciones de respuesta en la pantalla
    temporizadorHtml.style.display = "block"; //muestro temporizaor en pantalla
}

function mostrarPregunta() {
      // Obtengo la pregunta actual del array de preguntas
    const pregunta = preguntas[preguntaActual];
    preguntastrivia.textContent = pregunta.pregunta;
    opcionestrivia.innerHTML = "";// Limpio opciones de respuesta anteriores antes de mostrar las nuevas opciones.

    

   // Genero botones para cada opción de respuesta
   pregunta.opciones.forEach(function(opcion) {
      // Creo un nuevo botón para cada opción de respuesta.
    const button = document.createElement("button");
      // Asigno el texto de la opción a cada botón.
    button.textContent = opcion;
         // Cuando el jugador haga clic en el botón, verifico si la respuesta es correcta
    button.onclick = function() {
    // Llamo a la función para comprobar la respuesta seleccionada
        verificarRespuesta(opcion);
    };
      // Añade el botón a la pantalla, en el área de las opciones
    opcionestrivia.appendChild(button);

     // Empieza el temporizador nuevamente
    comenzarTemporizador();
});
}

// Función para verificar si la respuesta seleccionada es correcta.
function verificarRespuesta(opcionSeleccionada) {
        // Obtengo la pregunta actual de la lista de preguntas.
    const pregunta = preguntas[preguntaActual];
    const botones = opcionestrivia.querySelectorAll("button");

     //Paso sobre cada botón y cambio su estilo según si la respuesta es correcta o no.
botones.forEach(function(boton) {
    if (boton.textContent === pregunta.correcta) {
        boton.style.backgroundColor = "green"; // Resalto la respuesta correcta en verde.
        boton.style.color = "white"; // Resalto la respuesta correcta en verde.
    } else {
        boton.style.backgroundColor = "red"; // Resalto las respuestas incorrectas en rojo.
        boton.style.color = "white"; // Resalto la respuesta correcta en verde.
    }
    boton.disabled = true; // Deshabilito los botones después de seleccionar.
});

     // Si la respuesta es correcta, suma un puntooo y suena el sonido de correcto en el caso de que no sonido de error
    if (opcionSeleccionada === pregunta.correcta) {
        puntaje++;
        aciertoSonido.play();
    } else {
        errorSonido.play();
    }
 

    // Paro el temporizador para que no siga bajando mientras vemos el resultado
    temporizadorActivo = false;
    
    // Espera un segundo antes de mostrar la siguiente pregunta.
    setTimeout(function() {
         // Incremento el índice de la pregunta actual para pasar a la siguiente pregunta.
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
    temporizadorSonido.pause(); // Paro el sonido
    temporizadorSonido.currentTime = 0; // Reinicio su tiempo a 0 para que empiece desde el comienzo la proxima vez

    preguntastrivia.style.display = "none";
    opcionestrivia.style.display = "none";

    let mensajeFinal = "";

       // Si el jugador ha acertado todas las preguntas, se mostrara el mensaje en panatlla y el sonido de ganador.
    if (puntaje === preguntas.length) {
        mensajeFinal = "¡Felicidades! Has acertado todas las preguntas";
        winSonido.play();
    } else {
        
       // Si el jugador no ha acertado todas las preguntas, se mostrara el mensaje en panatlla y el sonido de perdedor.
        mensajeFinal = "¡Sigue practicando y mejora tu puntuación!";
        loseSonido.play();
    }

       // Muestro el mensaje final y el puntaje del jugador en la pantalla.
    resultado.innerHTML = 
        "<h2>Juego terminado</h2>" +
        "<p>Tu puntaje es: <strong>" + puntaje + "</strong> de <strong>" + preguntas.length + "</strong></p>" + 
        "<p>" + mensajeFinal + "</p>" +
        "<button onclick='reiniciarJuego()'>Reiniciar</button>";

 // Oculto el temporizador porque el juego ha terminado.
    temporizadorHtml.style.display = "none";
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // Reinicio las variables del juego a su estado inicial.
    preguntaActual = 0;
    puntaje = 0;
       // Oculto el área de juego y muestro el botón para empezar nuevamente.
    contenedorJuego.style.display = "none"
    botonJugar.style.display = "block";
    resultado.innerHTML = ""; //limpio resultados
}

/* Temporizador */
let tiempoRestante = 15;
let tiempoIntervalo;


function comenzarTemporizador() {
     // Detengo cualquier temporizador previo que esté corriendo para evitar que se mezcle con el anterior.
    clearInterval(tiempoIntervalo);

    // Activo el temporizador
    temporizadorActivo = true;

    // Reinicio el tiempo restante a 15 segundos
    tiempoRestante = 15;

// Muestro el tiempo restante en la pantalla (para que el jugador vea cuánto tiempo le queda).
    temporizadorHtml.textContent = tiempoRestante;

    
    // Establezco  intervalo de 1 segundo para decrementar el tiempo
    tiempoIntervalo = setInterval(function() {

          // Solo actualizo el tiempo si el temporizador está activo
        if(temporizadorActivo) {
        // Resto 1 segundo al tiempo restante
            tiempoRestante = tiempoRestante - 1;
            temporizadorHtml.textContent = tiempoRestante;

         // Si el tiempo se agota (llega a 0), detengo el temporizador
            if (tiempoRestante <= 0) {
                clearInterval(tiempoIntervalo);
        // Llamo a la función para verificar la respuesta, pasando una respuesta vacía porque el tiempo se agotó.
                verificarRespuesta("");
            }
        }
    }, 1000);// El intervalo se ejecuta cada 1 segundo.
}



/* Sonidos a utilizarr*/

// Carga el sonido del temporizador (cuando el reloj está corriendo).
const temporizadorSonido = new Audio("sonidos/temporizador.wav");
temporizadorSonido.loop = true; // Si termina vuelve a empezar
// Establece el volumen del sonido del temporizador (valor entre 0.0 y 1.0).
temporizadorSonido.volume = 0.5;

// Carga el sonido de error (cuando el jugador selecciona una respuesta incorrecta).
const errorSonido = new Audio("sonidos/error.mp3");
errorSonido.volume = 0.5;

// Carga el sonido de acierto (cuando el jugador selecciona una respuesta correcta).
const aciertoSonido = new Audio("sonidos/acierto.wav");
aciertoSonido.volume = 0.5;

// Carga el sonido de victoria (cuando el jugador gana el juego).
const winSonido = new Audio("sonidos/win.wav");
winSonido.volume = 0.5;


// Carga el sonido de derrota (cuando el jugador pierde el juego).
const loseSonido = new Audio("sonidos/perdiste.wav");
loseSonido.volume = 0.5; 



document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        temporizadorSonido.pause();
    } else {
        temporizadorSonido.play();
    }
  });