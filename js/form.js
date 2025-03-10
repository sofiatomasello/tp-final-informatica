// Función para validar el correo electrónico mediante expresiones regulares
function validarEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

// Obtener el formulario y el campo de correo
const formulario = document.getElementById('formularioContacto');
const campoEmail = document.getElementById('email');

// Añadir evento para validación al enviar el formulario
formulario.addEventListener('submit', function(evento) {
  // Comprobar si el correo es válido
  if (!validarEmail(campoEmail.value)) {
      evento.preventDefault(); // Evitar que el formulario se envíe
      alert('Por favor, ingrese un correo electrónico válido.');
  }
  // El formulario no se oculta y se envía normalmente sin cambiar su visibilidad
});