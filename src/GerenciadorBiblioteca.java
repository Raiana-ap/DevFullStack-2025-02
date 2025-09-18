import java.util.*;

public class GerenciadorBiblioteca{
    public static class Biblioteca {
        List<Livro> livros;
        public Biblioteca(){
            this.livros = new ArrayList<>();
        }
    }
    public static class Livro{
       String livro;
       String autor;
       int anoPublicacao;
       String disponibilidade;
       public Livro(String livro, String autor, int anoPublicacao, String disponibilidade){
           this.livro = livro;
           this.autor = autor;
           this.anoPublicacao = anoPublicacao;
           this.disponibilidade = disponibilidade;
       }
        @Override
        public String toString() {
            return livro + " - " + autor + " (" + anoPublicacao + ") [" + disponibilidade + "]";
        }
}
    private static void imprimir(){
        System.out.println(
                "BIBLIOTECA \n" +
                "Comandos: \n" +
                "Alterar Disponível: Torna a disponibilidade do livro em disponível. \n" +
                "Alterar Emprestado: Torna a disponibilidade do livro em emprestado \n" +
                "Informacoes Nome do livro: exibe as informações do livro \n" +
                "Novo: Adiciona novo livro  à biblioteca \n" +
                "Listar: Mostra todos os livros cadastrados\n" +
                "Sair: Encerra.");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Biblioteca biblioteca = new Biblioteca();
        imprimir();
        while (true) {
            String linha = sc.nextLine().trim();
            if(linha.length() == 0) continue;
            String in = linha.toLowerCase(Locale.ROOT).trim();
            if(in.startsWith("alterar")) {
                String disponibilidadeNova = linha.substring("alterar".length()).trim();
                if (!disponibilidadeNova.equalsIgnoreCase("disponivel") &&
                        !disponibilidadeNova.equalsIgnoreCase("emprestado")) {
                    System.out.println("ERRO: A disponibilidade só pode ser 'disponivel' ou 'emprestado'.");
                    continue;
                }

                System.out.println("Digite o nome do livro: ");
                String qual = sc.nextLine();

                altDisponibilidade(biblioteca, qual, disponibilidadeNova);
            } else if(in.startsWith("informacoes")) {
                String qual = linha.substring("informacoes".length()).trim();
                Livro encontrado = buscar(biblioteca, qual);
                if (encontrado != null) {
                    System.out.println("Livro encontrado \n" +
                            "Título: " + encontrado.livro + "\n" +
                            "Autor: " + encontrado.autor + "\n" +
                            "Ano de publicação: " + encontrado.anoPublicacao + "\n" +
                            "Disponibilidade: " + encontrado.disponibilidade);

                } else {
                    System.out.println("Livro " + qual + " não encontrado.");
                }
            } else if (in.equals("novo")) {
                System.out.println("Digite o nome do livro: ");
                String livro = sc.nextLine();
                System.out.println("Digite o autor do livro: ");
                String autor = sc.nextLine();
                System.out.println("Digite o ano de publicação do livro: ");
                int anoPublicacao = sc.nextInt();
                sc.nextLine();
                System.out.println("Digite o disponibilidade do livro: ");
                String disponibilidade = sc.nextLine();
                biblioteca.livros.add(new Livro(livro,autor,anoPublicacao,disponibilidade));
                System.out.println("Livro adicionado com sucesso");
            } else if (in.equals("listar")) {
                if(biblioteca.livros.isEmpty()) {
                    System.out.println("Nenhum livro cadastrado");
                }else {
                    for (int i = 0; i < biblioteca.livros.size(); i++) {
                        System.out.println(biblioteca.livros.get(i));
                    }
                }
            } else if (in.equals("sair")) {
                sc.close();
                return;
            } else{
                System.out.println("Comando invalido");
            }
        }
    }
    private static Livro buscar(Biblioteca biblioteca, String qual){
        for (Livro l : biblioteca.livros) {
            if (l.livro.equalsIgnoreCase(qual)) {
                return l;
            }
        }
        return null;
    }
    public static void altDisponibilidade(Biblioteca biblioteca, String qual, String disponibilidadeNova){
        Livro l = buscar(biblioteca, qual);
        if(l != null){
            l.disponibilidade = disponibilidadeNova.toLowerCase(Locale.ROOT);
            System.out.println("Disponibilidade alterada para: " + l.disponibilidade);
        } else {
            System.out.println("Livro não encontrado.");
        }
    }
}

