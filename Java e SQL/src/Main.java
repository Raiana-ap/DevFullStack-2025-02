import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        //PRIMITIVOS
        // integrais
        int intVar = 23423; // 32 bits
        long longVar = 2143924352; // maximo
        byte byteVar = -128; // -128 ate 127
        short shortVar = -32199; // |32000|

        // flutuantes
        double doubleVar = 234.234;
        float floatVar = 234.234f; // sempre o f no final

        // caracter
        char charVar = 'a';

        // booleanao
        boolean boolVar = true;

        System.out.println("intVar: " + intVar);
        System.out.printf("%.2f \n", floatVar);

        //OBJETOS
        String name = "Rai";
        System.out.println(name);


        int a, b, c;
        double area;

        a = 5;
        b = 6;
        c = a + b;
        area = (double) (a + b) / 2 * c;
        System.out.println(area);

        // Celsius para Fahrenheit
        Scanner input = new Scanner(System.in); // ler valor
        double celsius =  input.nextDouble(); // proximo double nao proximo qlqr coisa
        double farenheit =  (celsius * 1.8) + 32;
        System.out.println(farenheit);

        // Maior idade
        Scanner idade = new Scanner(System.in);
        int pessoa1 = idade.nextInt();
        Scanner idade2 = new Scanner(System.in);
        int pessoa2 = idade2.nextInt();
        if (pessoa1 > pessoa2) {
            System.out.println("A maior idade é: " + pessoa1);
        } else if (pessoa1 < pessoa2) {
            System.out.println("A maior idade é: " + pessoa2);
        } else {
            System.out.println("As duas idades são iguais.");
        }
        // Dia da semana usando SWITH-CASE
        Scanner num = new Scanner(System.in);
        int dia = num.nextInt();
        switch(dia) {
            case 1:
                System.out.println("Domingo");
                break;
            case 2:
                System.out.println("Segunda");
                break;
            case 3:
                System.out.println("Terça");
                break;
            case 4:
                 System.out.println("Quarta");
                 break;
            case 5:
                System.out.println("Quinta");
                break;
            case 6:
                System.out.println("Sexta");
                break;
            case 7:
                System.out.println("Sábado");
                break;
            case 8:
                System.out.println("A semana só tem sete dias.");
        }

        // Calculadora
        System.out.println("Digite um número: ");
        double num1 = input.nextDouble();
        System.out.println("Digite um segundo número: ");
        double num2 = input.nextDouble();
        System.out.println("Digite um operador: ");
        char operador = input.next().charAt(0);
        double resultado = 0;
        switch (operador) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                 break;
            case '/':
                resultado = num1 / num2;
                break;
        }
        System.out.println("Resultado: " + resultado);

        // 1 até 10 = for
        for (int i = 1; i<=10; i++){
            System.out.println(i);
        }

        // MANIPULAÇÃO DE STRING
        String texto = "Grêmio é o maior time do Sul.";
        int comprimento = texto.length();
        System.out.println(comprimento);
        String maiuscula = texto.toUpperCase();
        System.out.println(maiuscula);
        String minuscula = texto.toLowerCase();
        System.out.println(minuscula);
        String substituto = texto.replace("time", "grupo");
        System.out.println(substituto);
        String substring = texto.substring(1,3);
        System.out.println(substring);

        // MANIPULAÇÃO NUMÉRICA
        double numero = 58.30;
        double arredondado = Math.round(numero); // pra baixo
        System.out.println(arredondado);
        System.out.println(Math.ceil(numero));
        System.out.println(Math.floor(numero));
        System.out.println(Math.sqrt(numero));
        System.out.println(Math.random());

        // ARRAY
        int [] vetor = new int[10];
        vetor[0] = 1;
        vetor[1] = 2;
        vetor[2] = 3;
        vetor[3] = 4;
        vetor[4] = 5;
        vetor[5] = 6;
        vetor[6] = 7;
        vetor[7] = 8;
        vetor[8] = 9;
        vetor[9] = 10;

        System.out.println("Elementosdo Array: ");
        for (int i = 0; i < vetor.length; i++) {
            System.out.println(vetor[i]);
        }
        int soma = 0;
        for (int j=0;j<vetor.length;j++){
            soma += vetor[j];
        }
        System.out.println(soma);

        // Encontrar o maior elemento do array
        int maior = 0;
        for (int e = 0; e < vetor.length; e++) {
            if(maior < vetor[e]) maior = vetor[e];
        }
        System.out.println(maior);

        int [] newVetor = new int[vetor.length + 1];
        for (int k = 0; k < vetor.length; k++) {
            newVetor[k] = vetor[k];
        }
        newVetor[vetor.length] = 1;


        //  MATRIZES
        int [][] matrix = {
                {1, 2, 3},
                {4, 5, 6},
                {7, 8, 9}
        };

        for(int i = 0; i < matrix.length; i++ ){
            for(int j = 0; j < matrix[i].length; j++){
                System.out.println(matrix[i][j]);
            }
        }
        // Soma da diagonal
        int somaMatrixIgual = 0;
        int somaMatrixDiferente = 0;
        for(int i = 0; i < matrix.length; i++ ){
            for(int j = 0; j < matrix[i].length; j++){
                if(i == j){
                    somaMatrixIgual += matrix[i][j];
                    somaMatrixDiferente += matrix[i][matrix.length-1-i];
                }
            }
        }
        System.out.println(somaMatrixIgual);
        System.out.println(somaMatrixDiferente);
    }
}
