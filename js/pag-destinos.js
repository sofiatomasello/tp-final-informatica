// Tuve que hacer esto me paso que los videos iframes en los modales pueden seguir reproduciéndose después de que el modal se cierre.
// Al eliminar el 'src' y restaurarlo, se detiene la reproducción y se previene el autoplay cuando el modal se vuelva a abrir.



document.querySelector('#staticBackdrop1').addEventListener('hidden.bs.modal', function() {
    // Seleccionar todos los iframes dentro del modal con id '#staticBackdrop2'
    document.querySelectorAll('#staticBackdrop1 iframe').forEach(function(iframe) {
      let iframeSrc = iframe.src;  // Guardar el src actual
      iframe.src = '';  // Detener el video eliminando el src
      iframe.src = iframeSrc;  // Restaurar el src para evitar el autoplay
    });
});

document.querySelector('#staticBackdrop2').addEventListener('hidden.bs.modal', function() {
    // Seleccionar todos los iframes dentro del modal con id '#staticBackdrop2'
    document.querySelectorAll('#staticBackdrop2 iframe').forEach(function(iframe) {
      let iframeSrc = iframe.src;  // Guardar el src actual
      iframe.src = '';  // Detener el video eliminando el src
      iframe.src = iframeSrc;  // Restaurar el src para evitar el autoplay
    });
});

document.querySelector('#staticBackdrop3').addEventListener('hidden.bs.modal', function() {
    // Seleccionar todos los iframes dentro del modal con id '#staticBackdrop2'
    document.querySelectorAll('#staticBackdrop3 iframe').forEach(function(iframe) {
      let iframeSrc = iframe.src;  // Guardar el src actual
      iframe.src = '';  // Detener el video eliminando el src
      iframe.src = iframeSrc;  // Restaurar el src para evitar el autoplay
    });
});


document.querySelector('#staticBackdrop4').addEventListener('hidden.bs.modal', function() {
    // Seleccionar todos los iframes dentro del modal con id '#staticBackdrop2'
    document.querySelectorAll('#staticBackdrop4 iframe').forEach(function(iframe) {
      let iframeSrc = iframe.src;  // Guardar el src actual
      iframe.src = '';  // Detener el video eliminando el src
      iframe.src = iframeSrc;  // Restaurar el src para evitar el autoplay
    });
});



document.querySelector('#staticBackdrop5').addEventListener('hidden.bs.modal', function() {
    // Seleccionar todos los iframes dentro del modal con id '#staticBackdrop2'
    document.querySelectorAll('#staticBackdrop5 iframe').forEach(function(iframe) {
      let iframeSrc = iframe.src;  // Guardar el src actual
      iframe.src = '';  // Detener el video eliminando el src
      iframe.src = iframeSrc;  // Restaurar el src para evitar el autoplay
    });
});


document.querySelector('#staticBackdrop6').addEventListener('hidden.bs.modal', function() {
    // Seleccionar todos los iframes dentro del modal con id '#staticBackdrop2'
    document.querySelectorAll('#staticBackdrop6 iframe').forEach(function(iframe) {
      let iframeSrc = iframe.src;  // Guardar el src actual
      iframe.src = '';  // Detener el video eliminando el src
      iframe.src = iframeSrc;  // Restaurar el src para evitar el autoplay
    });
});


document.querySelector('#staticBackdrop7').addEventListener('hidden.bs.modal', function() {
    // Seleccionar todos los iframes dentro del modal con id '#staticBackdrop2'
    document.querySelectorAll('#staticBackdrop7 iframe').forEach(function(iframe) {
      let iframeSrc = iframe.src;  // Guardar el src actual
      iframe.src = '';  // Detener el video eliminando el src
      iframe.src = iframeSrc;  // Restaurar el src para evitar el autoplay
    });
});


document.querySelector('#staticBackdrop8').addEventListener('hidden.bs.modal', function() {
    // Seleccionar todos los iframes dentro del modal con id '#staticBackdrop2'
    document.querySelectorAll('#staticBackdrop8 iframe').forEach(function(iframe) {
      let iframeSrc = iframe.src;  // Guardar el src actual
      iframe.src = '';  // Detener el video eliminando el src
      iframe.src = iframeSrc;  // Restaurar el src para evitar el autoplay
    });
});


document.querySelector('#staticBackdrop9').addEventListener('hidden.bs.modal', function() {
    // Seleccionar todos los iframes dentro del modal con id '#staticBackdrop2'
    document.querySelectorAll('#staticBackdrop9 iframe').forEach(function(iframe) {
      let iframeSrc = iframe.src;  // Guardar el src actual
      iframe.src = '';  // Detener el video eliminando el src
      iframe.src = iframeSrc;  // Restaurar el src para evitar el autoplay
    });
});


document.querySelector('#staticBackdrop10').addEventListener('hidden.bs.modal', function() {
    // Seleccionar todos los iframes dentro del modal con id '#staticBackdrop2'
    document.querySelectorAll('#staticBackdrop10 iframe').forEach(function(iframe) {
      let iframeSrc = iframe.src;  // Guardar el src actual
      iframe.src = '';  // Detener el video eliminando el src
      iframe.src = iframeSrc;  // Restaurar el src para evitar el autoplay
    });
});

