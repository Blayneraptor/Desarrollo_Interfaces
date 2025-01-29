const numero = parseInt(prompt("Introduce un número entero:"), 10);

if (Number.isInteger(numero) && numero > 0) {
    if (numero >= 10 && numero <= 99) {
        alert(`El número ${numero} es ${numero % 2 === 0 ? "par" : "impar"}.`);
    } else if (numero >= 100 && numero <= 999) {
        alert(`El resto de dividir ${numero} entre 2 es ${numero % 2}.`);
    } else {
        alert("El número no cumple las condiciones para ser evaluado.");
    }
} else {
    alert("Error: Debes introducir un número entero positivo y distinto de cero.");
}
