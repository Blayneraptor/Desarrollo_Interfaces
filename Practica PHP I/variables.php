<?php
// Variables de diferentes tipos
$nombre = "José"; // String
$edad = 25; // Entero
$altura = 1.75; // Float
$esEstudiante = true; // Booleano
$amigos = ["Carlos", "Ana", "Luis"]; // Array

// Mostrar valores por pantalla
echo "<h2>Variables en PHP</h2>";
echo "Nombre: $nombre <br>";
echo "Edad: $edad <br>";
echo "Altura: $altura metros<br>";
echo "¿Es estudiante?: " . ($esEstudiante ? "Sí" : "No") . "<br>";

// Mostrar array
echo "Amigos: " . implode(", ", $amigos);
?>
