const container = document.getElementById('container');
const images = ['imagen1.png', 'imagen2.png', 'imagen3.png']; // Ajusta los nombres de tus imágenes
const links = ['https://www.playstation.com/es-es/ps5/', 'https://www.xbox.com/es-ES/consoles/xbox-series-x', 'https://store.nintendo.es/es'];

for (let i = 0; i < images.length; i++) {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const image = document.createElement('img');
    image.src = `images/${images[i]}`; // Ruta a la carpeta de imágenes

    const link = document.createElement('a');
    link.href = links[i];
    link.textContent = links[i]; // Texto del enlace (puedes personalizarlo)

    imageContainer.appendChild(image);
    imageContainer.appendChild(link);
    container.appendChild(imageContainer);
}