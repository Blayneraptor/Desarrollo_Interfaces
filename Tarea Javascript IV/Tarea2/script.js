function mostrarImagen() {
    // Array con nombres de las imágenes
    let images = [
        "imagen1.jpg",
        "imagen2.jpg",
        "imagen3.jpg",
        "imagen4.jpg",
        "imagen5.jpg",
    ];

    // Generar una lista amigable de nombres base de las imágenes
    let imageNames = images.map(image => image.split(".")[0]);

    // Preguntar al usuario qué imagen desea imprimir
    let selectedImage = prompt(
        `¿Qué imagen deseas imprimir? Escribe el nombre base (por ejemplo: imagen1, imagen2, etc.)\nImágenes disponibles: ${imageNames.join(", ")}`
    );

    // Validar la entrada del usuario
    if (selectedImage) {
        selectedImage = selectedImage.trim().toLowerCase();

        // Buscar si la imagen existe en el array
        let foundImage = images.find(image => {
            let baseName = image.split(".")[0].toLowerCase();
            return baseName === selectedImage;
        });

        if (foundImage) {
            // Crear y agregar la imagen al contenedor
            let imgElement = document.createElement("img");
            imgElement.src = `images/${foundImage}`; // Ruta a la carpeta de imágenes
            imgElement.alt = `Imagen de ${selectedImage}`;

            // Eliminar imágenes previas (si existen)
            let imageContainer = document.querySelector(".image-container");
            imageContainer.innerHTML = ""; // Limpiar el contenedor
            imageContainer.appendChild(imgElement);
        } else {
            alert(
                `La imagen no existe. Por favor, inténtalo nuevamente.\nImágenes disponibles: ${imageNames.join(", ")}`
            );
        }
    } else {
        alert("No ingresaste ningún nombre de imagen.");
    }
}
