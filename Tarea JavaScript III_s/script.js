function startGame(response) {
    if (response === 'si') {
        document.getElementById("destino").classList.remove("hidden");
        document.getElementById("message").innerHTML = "";
    } else {
        let img = document.createElement("img");
        img.src = "images/you-miss-it.jpg"; // Cambia esta imagen
        document.getElementById("message").appendChild(img);
    }
}

function chooseDestination(destination) {
    document.getElementById("destino").classList.add("hidden");
    if (destination === 'francia') {
        document.getElementById("francia").classList.remove("hidden");
    } else if (destination === 'españa') {
        document.getElementById("españa").classList.remove("hidden");
    } else if (destination === 'portugal') {
        document.getElementById("portugal").classList.remove("hidden");
    }
}

function chooseCity(city) {
    document.getElementById("francia").classList.add("hidden");
    document.getElementById(city).classList.remove("hidden");
}

function chooseNature(nature) {
    let images = "";
    if (nature === 'playa') {
        images = "<p>Texto sobre playa</p><div class='image-gallery'><img src='images/playa1.jpg'><img src='images/playa2.jpg'><img src='images/playa3.jpg'></div>";
    } else if (nature === 'montaña') {
        images = "<p>Texto sobre montaña</p><div class='image-gallery'><img src='images/montana1.jpg'><img src='images/montana2.jpg'></div>";
    }
    document.getElementById("finalMessage").innerHTML = images;
    document.getElementById("finalMessage").classList.remove("hidden");
}

function chooseSpain(nature) {
    let message = "";
    if (nature === 'playa') {
        message = "<p>España es conocida por sus hermosas playas.</p><div class='image-gallery'><img src='images/playa_spain1.jpg'><img src='images/playa_spain2.jpg'></div>";
    } else if (nature === 'montaña') {
        message = "<p>España también ofrece hermosos paisajes montañosos.</p><div class='image-gallery'><img src='images/montaña_spain1.jpg'><img src='images/montaña_spain2.jpg'></div>";
    }
    document.getElementById("finalMessage").innerHTML = message;
    document.getElementById("finalMessage").classList.remove("hidden");
}

function choosePortugal(type) {
    let message = "";
    if (type === 'turismo') {
        message = "<p>Lisboa es famosa por su arquitectura histórica y vibrante vida nocturna.</p><div class='image-gallery'><img src='images/lisboa.jpg'></div>";
    } else if (type === 'playa') {
        message = "<p>El Algarve es famoso por sus impresionantes playas.</p><div class='image-gallery'><img src='images/algarve1.jpg'><img src='images/algarve2.jpg'></div>";
    } else if (type === 'montaña') {
        message = "<p>En Nazaret puedes disfrutar de las olas gigantes, mientras que en Fátima puedes ver su santuario.</p><div class='image-gallery'><img src='images/nazare.jpg'><img src='images/fatima.jpg'></div>";
    }
    document.getElementById("finalMessage").innerHTML = message;
    document.getElementById("finalMessage").classList.remove("hidden");
}
