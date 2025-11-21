public class SistemaBiblioteca {
    public static void main(String[] args) {

        Biblioteca biblioteca = new Biblioteca();

        Livro livro1 = new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943);
        Livro livro2 = new Livro("Dom Quixote", "Miguel de Cervantes", 1605);
        Livro livro3 = new Livro("1984", "George Orwell", 1949);
        Livro livro4 = new Livro("Cem Anos de Solidão", "Gabriel García Márquez", 1967);
        Livro livro5 = new Livro("Orgulho e Preconceito", "Jane Austen", 1813);
        Livro livro6 = new Livro("O Hobbit", "J.R.R. Tolkien", 1937);
        Livro livro7 = new Livro("A Revolução dos Bichos", "George Orwell", 1945);
        Livro livro8 = new Livro("A Metamorfose", "Franz Kafka", 1915);
        Livro livro9 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);
        Livro livro10 = new Livro("O Nome da Rosa", "Umberto Eco", 1980);

        biblioteca.addLivro(livro1);
        biblioteca.addLivro(livro2);
        biblioteca.addLivro(livro3);
        biblioteca.addLivro(livro4);
        biblioteca.addLivro(livro5);
        biblioteca.addLivro(livro6);
        biblioteca.addLivro(livro7);
        biblioteca.addLivro(livro8);
        biblioteca.addLivro(livro9);
        biblioteca.addLivro(livro10);

        biblioteca.alterarDisponibilidade("O Pequeno Príncipe", false);
        biblioteca.listarLivros();
    }
}
