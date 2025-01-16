// Array de objetos que contienen los nombres de los países y las rutas de las imágenes
const countries = [
    { name: "españa", image: "images/image1-country.jpg" },
    { name: "francia", image: "images/image2-country.jpg" },
    { name: "japon", image: "images/image3-country.jpg" },
    { name: "newyork", image: "images/image4-country.jpg" }
];

function showCountryImage() {
    // Obtener el país seleccionado
    var selectedCountry = document.getElementById("country-select").value;

    // Obtener el contenedor de la imagen
    var imageContainer = document.getElementById("image-container");

    // Obtener la imagen que vamos a mostrar
    var countryImage = document.getElementById("country-image");

    // Verificar si se ha seleccionado un país válido
    var country = countries.find(country => country.name === selectedCountry);

    if (country) {
        // Si el país es válido, actualizar la imagen
        countryImage.setAttribute("src", country.image);
        countryImage.setAttribute("alt", "Imagen de " + selectedCountry.charAt(0).toUpperCase() + selectedCountry.slice(1));
    } else {
        // Si no se selecciona ningún país, mostrar el mapa del mundo
        countryImage.setAttribute("src", "images/map-world.jpg");
        countryImage.setAttribute("alt", "Mapa del mundo");
    }
}
