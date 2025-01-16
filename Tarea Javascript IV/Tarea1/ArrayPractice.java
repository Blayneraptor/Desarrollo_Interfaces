package Tarea1;
import java.util.Scanner;

public class ArrayPractice {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Pedir número de celdas para el array
        System.out.println("Introduce el número de celdas del array: ");
        int size = scanner.nextInt();

        // Crear y llenar el array
        int[] array = new int[size];
        for (int i = 0; i < size; i++) {
            array[i] = i;
        }

        // Imprimir array con bucle for
        System.out.println("Imprimiendo con un bucle for:");
        for (int i = 0; i < size; i++) {
            System.out.println("Celda " + i + ": " + array[i]);
        }

        // Imprimir array con bucle while
        System.out.println("Imprimiendo con un bucle while:");
        int index = 0;
        while (index < size) {
            System.out.println("Celda " + index + ": " + array[index]);
            index++;
        }

        scanner.close();
    }
}
