document.addEventListener("DOMContentLoaded", function () {
    if (!confirm("¿Quieres conocer tu horóscopo?")) {
        return; // Si el usuario dice que no, no se genera nada.
    }

    // Agregar título arriba de todo (horóscopo occidental)
    const titulo = document.createElement("h1");
    titulo.textContent = "Horóscopo y signos del zodíaco";
    document.body.appendChild(titulo);

    // Crear contenedores para el horóscopo occidental
    const body = document.body;
    const container = document.createElement("div");
    container.classList.add("container");

    const signosContainer = document.createElement("div");
    signosContainer.classList.add("signos-container");

    const detalles = document.createElement("div");
    detalles.classList.add("detalles");

    // Agregar contenedores al body
    body.appendChild(container);
    container.appendChild(signosContainer);
    container.appendChild(detalles);

    // Cargar XML con AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "horoscopo.xml", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const xml = xhr.responseXML;

            // Mostrar signos occidentales
            const signos = xml.getElementsByTagName("signo");
            for (let signo of signos) {
                const nombre = signo.getAttribute("nombre");
                const fecha = signo.getAttribute("fecha");
                const imagen = signo.getAttribute("imagen");
                const prediccion = signo.getElementsByTagName("prediccion")[0].textContent;
                const caracteristicas = signo.getElementsByTagName("caracteristicas")[0].textContent;

                // Crear la tarjeta del signo
                const signoDiv = document.createElement("div");
                signoDiv.classList.add("signo");
                signoDiv.innerHTML = `
                    <img src="images/${imagen}" alt="${nombre}">
                    <div class="texto">
                        <span class="nombre">${nombre}</span>
                        <span class="fecha">${fecha}</span>
                    </div>
                `;
                // Al hacer clic se muestran los detalles
                signoDiv.addEventListener("click", () => mostrarDetalles(nombre, prediccion, caracteristicas, imagen, fecha));
                signosContainer.appendChild(signoDiv);
            }

            // Insertar sección de preguntas entre el horóscopo occidental y el chino
            const queryContainer = document.createElement("div");
            queryContainer.classList.add("horoscope-query");
            queryContainer.innerHTML = `
                <p>¿Cuál es mi signo del zodíaco? ¿y mi horóscopo chino?</p>
                <label for="birthdate">Introduce tu fecha de nacimiento:</label>
                <input type="date" id="birthdate">
                <p>Tu signo del zodíaco es: <span id="zodiacResult" style="font-weight: bold;"></span></p> <!-- Negrita para el resultado del signo -->
                <p>Tu horóscopo chino es: <span id="chineseResult" style="font-weight: bold;"></span></p> <!-- Negrita para el resultado del horóscopo chino --
            `;
            document.body.appendChild(queryContainer);

            // Cuando el usuario cambie la fecha, calcular el signo
            document.getElementById("birthdate").addEventListener("change", function () {
                const birthdate = this.value;
                if (!birthdate) return;
                const dateObj = new Date(birthdate);
                const zodiacSign = getZodiac(dateObj);
                const chineseSign = getChineseZodiac(dateObj);
                document.getElementById("zodiacResult").textContent = zodiacSign;
                document.getElementById("chineseResult").textContent = chineseSign;
            });

            // Procesar la sección de Horóscopo Chino (tabla de 3 columnas x 4 filas)
            const chinoElement = xml.getElementsByTagName("horoscopoChino")[0];
            if (chinoElement) {
                // Crear título para el horóscopo chino
                const chinoTitulo = document.createElement("h2");
                chinoTitulo.textContent = "Horóscopo Chino";
                chinoTitulo.classList.add("chino-titulo");
                document.body.appendChild(chinoTitulo);

                // Crear tabla (3 columnas x 4 filas)
                const table = document.createElement("table");
                table.classList.add("chino-table");
                document.body.appendChild(table);

                const animales = chinoElement.getElementsByTagName("animal");
                let row;
                for (let i = 0; i < animales.length; i++) {
                    if (i % 3 === 0) { // Nueva fila cada 3 animales
                        row = document.createElement("tr");
                        table.appendChild(row);
                    }
                    const name = animales[i].getAttribute("nombre");
                    const image = animales[i].getAttribute("imagen");
                    const cell = document.createElement("td");
                    cell.innerHTML = `
                        <img src="images/${image}" alt="${name}"><br>
                        <span>${name}</span>
                    `;
                    row.appendChild(cell);
                }
            }
        }
    };
    xhr.send();

    // Función para mostrar detalles del signo occidental
    function mostrarDetalles(nombre, prediccion, caracteristicas, imagen, fecha) {
        detalles.innerHTML = `
            <div class="detalle-contenido">
                <div class="detalle-imagen">
                    <img src="images/${imagen}" alt="${nombre}">
                    <span class="fecha">${fecha}</span>
                </div>
                <div class="detalle-textos">
                    <h2>${nombre}</h2>
                    <h3>PREDICCIÓN DE HOY</h3>
                    <p>${prediccion}</p>
                    <h3>CARACTERÍSTICAS DEL SIGNO</h3>
                    <p>${caracteristicas}</p>
                </div>
            </div>
        `;
    }

    // Función para calcular el signo del zodíaco (occidental)
    function getZodiac(date) {
        const day = date.getDate();
        const month = date.getMonth() + 1; // Enero es 0
        let zodiac = "";
        if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
            zodiac = "Acuario";
        } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
            zodiac = "Piscis";
        } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
            zodiac = "Aries";
        } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
            zodiac = "Tauro";
        } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
            zodiac = "Géminis";
        } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
            zodiac = "Cáncer";
        } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
            zodiac = "Leo";
        } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
            zodiac = "Virgo";
        } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
            zodiac = "Libra";
        } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
            zodiac = "Escorpio";
        } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
            zodiac = "Sagitario";
        } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
            zodiac = "Capricornio";
        }
        return zodiac;
    }

    // Función para calcular el horóscopo chino
    function getChineseZodiac(date) {
        const year = date.getFullYear();
        const animals = ["Rata", "Buey", "Tigre", "Conejo", "Dragón", "Serpiente", "Caballo", "Cabra", "Mono", "Gallo", "Perro", "Cerdo"];
        const index = (year - 4) % 12;
        return animals[index];
    }
});