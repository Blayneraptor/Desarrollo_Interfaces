<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario con PHP</title>
</head>
<body>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nombre = htmlspecialchars($_POST['nombre']);
        $apellidos = htmlspecialchars($_POST['apellidos']);
        $telefono = htmlspecialchars($_POST['telefono']);
        $email = htmlspecialchars($_POST['mail']);
        $comentarios = htmlspecialchars($_POST['comentarios']);

        $destinatario = "josecouso@example.com";
        $asunto = "Nuevo mensaje del formulario";
        $mensaje = "Nombre: $nombre\nApellidos: $apellidos\nTeléfono: $telefono\nEmail: $email\nComentarios: $comentarios";
        $headers = "From: $email";

        if (mail($destinatario, $asunto, $mensaje, $headers)) {
            echo "<p style='color:green;'>Mensaje enviado con éxito.</p>";
        } else {
            echo "<p style='color:red;'>Error al enviar el mensaje.</p>";
        }
    }
    ?>

    <form action="" method="post">
        <label for="nombre">NOMBRE:</label>
        <input type="text" name="nombre" required><br><br>

        <label for="apellidos">APELLIDOS:</label>
        <input type="text" name="apellidos" required><br><br>

        <label for="telefono">TELÉFONO:</label>
        <input type="text" name="telefono" required><br><br>

        <label for="mail">EMAIL:</label>
        <input type="email" name="mail" required><br><br>

        <label for="comentarios">COMENTARIOS:</label>
        <textarea name="comentarios" rows="4" cols="30"></textarea><br><br>

<div class="buttons">
    <input type="submit" value="Enviar">
    <input type="reset" value="Borrar">
</div>
    </form>
</body>
</html>