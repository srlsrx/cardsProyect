// Seleccionamos el texto con el id "hoverText" y el elemento de audio
const musicHover1 = document.getElementById('musicHover1');
const musicHover2 = document.getElementById('musicHover2');
const musicHover3 = document.getElementById('musicHover3');

const song1 = document.getElementById('song1');
const song2 = document.getElementById('song2');
const song3 = document.getElementById('song3');

// Función para manejar el evento de hover en los textos
function addHoverEffect(textElement, audioElement) {
    textElement.addEventListener('mouseenter', function() {
        audioElement.play();  // Reproducir el sonido
    });

    textElement.addEventListener('mouseleave', function() {
        audioElement.pause();  // Pausar el sonido
        audioElement.currentTime = 0;  // Volver al principio de la canción
    });
}

// Aplicar la función a los 3 textos
addHoverEffect(musicHover1, song1);
addHoverEffect(musicHover2, song2);
addHoverEffect(musicHover3, song3);