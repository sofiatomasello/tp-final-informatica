// Tuve que hacer esto porque los videos iframe en los modales pueden seguir reproduciéndose después de que el modal se cierre.
// Al eliminar el 'src' y restaurarlo, se detiene la reproducción y se previene que el video se reproduzca automáticamente cuando el modal se vuelva a abrir.


document.querySelector('#staticBackdrop1').addEventListener('hidden.bs.modal', function() {
  // Seleccionar el iframe dentro del modal con id '#staticBackdrop1'
  let iframe = document.querySelector('#staticBackdrop1 iframe');
  let iframeSrc = iframe.src;  // Guardar el src actual
  iframe.src = '';  // Detener el video eliminando el src
  iframe.src = iframeSrc;  // Restaurar el src para evitar el autoplay
});

// Para el modal con id '#staticBackdrop2'
document.querySelector('#staticBackdrop2').addEventListener('hidden.bs.modal', function() {
  let iframe = document.querySelector('#staticBackdrop2 iframe');  // Seleccionar el iframe
  let iframeSrc = iframe.src;  // Guardar el src actual
  iframe.src = '';  // Detener el video eliminando el src
  iframe.src = iframeSrc;  // Restaurar el src para evitar el autoplay
});
// Para el modal con id '#staticBackdrop3'
document.querySelector('#staticBackdrop3').addEventListener('hidden.bs.modal', function() {
  let iframe = document.querySelector('#staticBackdrop3 iframe');  // Seleccionar el iframe
  let iframeSrc = iframe.src;  // Guardar el src actual
  iframe.src = '';  // Detener el video eliminando el src
  iframe.src = iframeSrc;  // Restaurar el src para evitar el autoplay
});

// Para el modal con id '#staticBackdrop4'
document.querySelector('#staticBackdrop4').addEventListener('hidden.bs.modal', function() {
  let iframe = document.querySelector('#staticBackdrop4 iframe');  // Seleccionar el iframe
  let iframeSrc = iframe.src;  // Guardar el src actual
  iframe.src = '';  // Detener el video eliminando el src
  iframe.src = iframeSrc;  // Restaurar el src para evitar el autoplay
});

// Para el modal con id '#staticBackdrop5'
document.querySelector('#staticBackdrop5').addEventListener('hidden.bs.modal', function() {
  let iframe = document.querySelector('#staticBackdrop5 iframe');  // Seleccionar el iframe
  let iframeSrc = iframe.src;  // Guardar el src actual
  iframe.src = '';  // Detener el video eliminando el src
  iframe.src = iframeSrc;  // Restaurar el src para evitar el autoplay
});

// Para el modal con id '#staticBackdrop6'
document.querySelector('#staticBackdrop6').addEventListener('hidden.bs.modal', function() {
  let iframe = document.querySelector('#staticBackdrop6 iframe');  // Seleccionar el iframe
  let iframeSrc = iframe.src;  // Guardar el src actual
  iframe.src = '';  // Detener el video eliminando el src
  iframe.src = iframeSrc;  // Restaurar el src para evitar el autoplay
});

// Para el modal con id '#staticBackdrop7'
document.querySelector('#staticBackdrop7').addEventListener('hidden.bs.modal', function() {
  let iframe = document.querySelector('#staticBackdrop7 iframe');  // Seleccionar el iframe
  let iframeSrc = iframe.src;  // Guardar el src actual
  iframe.src = '';  // Detener el video eliminando el src
  iframe.src = iframeSrc;  // Restaurar el src para evitar el autoplay
});

// Para el modal con id '#staticBackdrop8'
document.querySelector('#staticBackdrop8').addEventListener('hidden.bs.modal', function() {
  let iframe = document.querySelector('#staticBackdrop8 iframe');  // Seleccionar el iframe
  let iframeSrc = iframe.src;  // Guardar el src actual
  iframe.src = '';  // Detener el video eliminando el src
  iframe.src = iframeSrc;  // Restaurar el src para evitar el autoplay
});

// Para el modal con id '#staticBackdrop9'
document.querySelector('#staticBackdrop9').addEventListener('hidden.bs.modal', function() {
  let iframe = document.querySelector('#staticBackdrop9 iframe');  // Seleccionar el iframe
  let iframeSrc = iframe.src;  // Guardar el src actual
  iframe.src = '';  // Detener el video eliminando el src
  iframe.src = iframeSrc;  // Restaurar el src para evitar el autoplay
});

// Para el modal con id '#staticBackdrop10'
document.querySelector('#staticBackdrop10').addEventListener('hidden.bs.modal', function() {
  let iframe = document.querySelector('#staticBackdrop10 iframe');  // Seleccionar el iframe
  let iframeSrc = iframe.src;  // Guardar el src actual
  iframe.src = '';  // Detener el video eliminando el src
  iframe.src = iframeSrc;  // Restaurar el src para evitar el autoplay
});