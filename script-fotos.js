document.querySelectorAll('.photo-input').forEach(input => {
    input.addEventListener('change', function(e) {
        const file = e.target.files[0];
        
        if (file) {
            const reader = new FileReader();
            const parentBox = this.parentElement;

            reader.onload = function(event) {
                // Eliminar cualquier foto cargada previamente
                const existingImg = parentBox.querySelector('.uploaded-img');
                if (existingImg) {
                    existingImg.remove();
                }

                // Crear y mostrar la nueva imagen
                const img = document.createElement('img');
                img.src = event.target.result;
                img.classList.add('uploaded-img');
                
                parentBox.appendChild(img);
            };

            reader.readAsDataURL(file);
        }
    });
});