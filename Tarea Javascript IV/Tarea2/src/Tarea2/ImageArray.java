package Tarea2;

import javax.swing.*;
import java.io.File;
import java.util.Scanner;

public class ImageArray {
    public static void main(String[] args) {
        // Crear un array con los nombres base de las imágenes (sin la extensión)
        String[] imageNames = {
            "imagen1",
            "imagen2",
            "imagen3",
            "imagen4",
            "imagen5"
        };

        // Crear la extensión de imagen que vamos a usar
        String extension = ".jpg";

        Scanner scanner = new Scanner(System.in);

        // Preguntar al usuario qué imagen desea ver (sin la extensión)
        System.out.println("¿Qué imagen deseas imprimir? (Escribe el nombre base, por ejemplo, 'imagen1')");
        for (String name : imageNames) {
            System.out.println("- " + name); // Mostrar solo el nombre base
        }

        String userChoice = scanner.nextLine();

        // Verificar si el nombre base está en el array
        boolean found = false;
        for (String name : imageNames) {
            if (name.equals(userChoice)) {
                found = true;

                // Construir la ruta completa con la ruta absoluta
                String basePath = "C:/Users/Blayne/OneDrive/DIGITECH/2º Curso DAM/DESARROLLO DE INTERFACES/Desarrollo_Interfaces/Tarea Javascript IV/Tarea2/images/";
                String imagePath = basePath + name + extension;

                // Verificar si el archivo existe
                File imageFile = new File(imagePath);
                if (!imageFile.exists()) {
                    System.out.println("La imagen no se encuentra en la ruta: " + imagePath);
                    break;
                }

                // Mostrar la imagen en una ventana
                JFrame frame = new JFrame("Visor de imágenes");
                frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
                frame.setSize(600, 400);

                // Crear el ImageIcon y verificar si se cargó correctamente
                ImageIcon image = new ImageIcon(imagePath);
                if (image.getIconWidth() == -1) {
                    System.out.println("No se pudo cargar la imagen.");
                    break;
                }

                JLabel label = new JLabel(image);
                frame.add(label);

                frame.setVisible(true);
                break;
            }
        }

        if (!found) {
            System.out.println("La imagen no existe en la lista. Por favor, inténtalo de nuevo.");
        }

        scanner.close();
    }
}
