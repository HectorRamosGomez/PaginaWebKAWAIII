const heart = document.getElementById('heart');
const dialogCloud = document.getElementById('dialog-cloud');
const dialogText = document.getElementById('dialog-text');

const fullText = "Holi! que tal? soy KAW-AII y me dedicare a guardar cosas para que nunca se olviden, aun estoy en proceso de desarrollo pero el jefe dice que iremos poco a poco";
let isTyping = false;

// Cargar tu audio
const typeSound = new Audio('Animal1.mp3'); 
typeSound.loop = true; // Hacemos que sea continuo durante la escritura
typeSound.volume = 0.3; // Ajusta el volumen a tu gusto (0.0 a 1.0)

heart.addEventListener('click', () => {
    if (isTyping) return;

    dialogCloud.classList.remove('hidden');
    dialogText.textContent = "";
    isTyping = true;

    // Reiniciar y reproducir el audio al empezar a escribir
    typeSound.currentTime = 0;
    typeSound.play().catch(e => {
        console.error("Error al reproducir audio:", e);
    });

    let index = 0;

    function typeWriter() {
        if (index < fullText.length) {
            dialogText.textContent += fullText.charAt(index);
            index++;
            setTimeout(typeWriter, 85); // Ajusta la velocidad de escritura aquí
        } else {
            // CUANDO TERMINA DE ESCRIBIR:
            isTyping = false;
            typeSound.pause(); // Pausar el audio
            typeSound.currentTime = 0; // Opcional: rebobinar al inicio
        }
    }

    typeWriter();
});