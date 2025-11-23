public class ExemplosConstrutores {
    static {
        System.out.println("Inicializando");
    }

    public ExemplosConstrutores() {
        System.out.println("Construtor Padrão");
    }

    private String nome;
    private int idade;
    public ExemplosConstrutores(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
        System.out.println("Construtor parametizado: Nome " + nome + " idade " + idade);
    }

    public ExemplosConstrutores(String nome) {
        this(nome, 0);
        System.out.println("Construtor sobrecarregado: Nome " + nome);
    }

    public ExemplosConstrutores(ExemplosConstrutores outro) {
        this.nome = outro.nome;
        this.idade = outro.idade;
        System.out.println("Construtor Cópia: Nome " + nome + " idade " + idade);
    }

    private ExemplosConstrutores(boolean flag){
        System.out.println("Construtor flag: " + flag);
    }
    public static ExemplosConstrutores criarInstancia(){
        return new ExemplosConstrutores(true);
    }

    public static void main(String[] args) {
        ExemplosConstrutores exemplo = new ExemplosConstrutores();
        ExemplosConstrutores exemplo2 = new ExemplosConstrutores("Ropber", 41);
        ExemplosConstrutores exemplo3 = new ExemplosConstrutores("Miguel");
        ExemplosConstrutores exemplo4 = new ExemplosConstrutores("exemplo2");
    }
}