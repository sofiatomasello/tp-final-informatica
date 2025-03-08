

// Función para validar el correo electrónico mediante expresiones regulares
function validarEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

// Obtener el formulario y el campo de correo
const formulario = document.getElementById('formularioContacto');
const campoEmail = document.getElementById('email');
const imagenAgradecimiento = document.getElementById('imagen-agradecimiento');

// Añadir evento para validación al enviar el formulario
formulario.addEventListener('submit', function(evento) {
  // Comprobar si el correo es válido
  if (!validarEmail(campoEmail.value)) {
      evento.preventDefault(); // Evitar que el formulario se envíe
      alert('Por favor, ingrese un correo electrónico válido.');
  } else {
      // Si el correo es válido, mostrar la imagen de agradecimiento
      imagenAgradecimiento.style.display = 'block';
      // Ocultar el formulario
      formulario.style.display = 'none';

      // Enviar el formulario después de 3 segundos para dar tiempo a ver la imagen
      setTimeout(function() {
        formulario.submit();
      }, 3000); // Espera 3 segundos antes de enviar el formulario
  }
});