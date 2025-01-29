const euros = parseFloat(prompt("Introduce el importe en euros:"));

if (!isNaN(euros) && euros > 0) {
    const tasaDeCambio = 0.87;
    const libras = euros * tasaDeCambio;
    document.write(`<p>${euros} euros equivalen a ${libras.toFixed(2)} libras.</p>`);
} else {
    document.write("<p>Por favor, introduce un número válido.</p>");
}
