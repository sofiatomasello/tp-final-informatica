


//Utilizo la libreria Glightbox para la realizacion de la galeria de fotos
const lightbox = GLightbox({
 // Seleccionamos los elementos con la clase '.glightbox'
    selector: '.glightbox',
 // Habilitamos la navegación táctil (deslizamiento) en dispositivos móviles
    touchNavigation: true,
    // Activamos el bucle para que, al llegar al final de la galería, se vuelva a la primera imagen
    loop: true,
    // Definimos el tamaño de la ventana emergente del lightbox
    width: 800, 
    height: 600,
});