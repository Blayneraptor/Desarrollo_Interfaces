const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.querySelector('.main-image');

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        const newImage = `images/image${index + 1}-country.jpg`;
        mainImage.src = newImage;

        // Restablecer el alto máximo para que se aplique la altura fija
        mainImage.style.maxHeight = 'none';
        setTimeout(() => {
            mainImage.style.maxHeight = '900px';
        }, 0);
    });
});