public class ExemplosMetodos {

    public static void metodoEstatico() {
        System.out.println("Metodo Estatico");
    }

    public void metodoDeInstancia() {
        System.out.println("Metodo Tradicional");
    }

    // Classe abstrata estática interna
    public static abstract class ClasseComMetodoAbstrato {
        public abstract void metodoAbstrato();
    }

    // Subclasse concreta que implementa o método abstrato
    public static class SubClasseComMetodoAbstrato extends ClasseComMetodoAbstrato {
        @Override
        public void metodoAbstrato() {
            System.out.println("Metodo Abstrato");
        }
    }

    public static void main(String[] args) {

        // Chamando método estático
        ExemplosMetodos.metodoEstatico();

        // Chamando método de instância
        ExemplosMetodos exemplo = new ExemplosMetodos();
        exemplo.metodoDeInstancia();

        // Chamando método abstrato implementado
        ExemplosMetodos.SubClasseComMetodoAbstrato obj = new ExemplosMetodos.SubClasseComMetodoAbstrato();
        obj.metodoAbstrato();
    }
}
