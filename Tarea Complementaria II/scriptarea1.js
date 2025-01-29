//Tarea1

const numero = parseInt(prompt("Introduce un número entero:"));

if (!(numero <= 0 || isNaN(numero))) {
    if (numero % 2 === 0) {
        document.write(`<p>El número ${numero} es par.</p>`);
    } else {
        document.write(`<p>El número ${numero} es impar.</p>`);
    }
} else {
    document.write("<p>Error: El número debe ser mayor que cero.</p>");
}

