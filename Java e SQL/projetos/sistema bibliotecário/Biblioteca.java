import java.util.ArrayList;
import java.util.List;

public class Biblioteca {
    private List<Livro> livros = new ArrayList<>();

    public void addLivro(Livro livro) {
        livros.add(livro);
    }

    public void listarLivros() {
        if (livros.isEmpty()) {
            System.out.println("Não há livros na biblioteca.");
        } else {
            for (Livro l : livros) {
                l.exibirInfoLivro();
            }
        }
    }

    public void alterarDisponibilidade(String titulo, boolean disponibilidade) {
        for (Livro livro : livros) {
            if (livro.getTitulo().equals(titulo)) {
                livro.setDisponibilidade(disponibilidade);
                System.out.println("Disponibilidade do livro \"" + titulo +
                        "\" foi alterada.");
                return;
            }
        }
        System.out.println("Livro não encontrado.");
    }
}
