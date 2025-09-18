public class ExemplosClasses {
    public static class ClasseEstatica {
        public static void mostrarMensagem(){
            System.out.println("Mensagem na Classe Estatica");
        }
    }
    public class ClasseInterna {
        /*tem acesso a outros elementos*/
        public void mostrarMensagem(){
            System.out.println("Mensagem Interna");
        }
    }
    public void exemploClasseLocal(){
        class ClasseLocal{
            public void mostrarMensagem(){
                System.out.println("Mensagem Local");
            }
        }
        ClasseLocal classeLocal = new ClasseLocal();
        classeLocal.mostrarMensagem();
    }
    public static abstract class ClasseAbstrata {
        public abstract void mostrarMensagem();
    }
    public static class SubClasseAbstrata extends ClasseAbstrata{
        @Override
        public void mostrarMensagem(){
            System.out.println("Mensagem da SubClasse Abstrata");
        }
    }
    public sealed class ClasseSelada permits SubClasseSelada{
        public void mostrarMensagem(){
            System.out.println("Mensagem Selada");
        }
    }
    public final class SubClasseSelada extends ClasseSelada{
        @Override
        public void mostrarMensagem(){
            System.out.println("Mensagem da SubSelada");
        }
    }

    public record ClasseRecord(String nome){
        /*imutáveis*/
    }


    public static void main(String[] args) {
        ClasseEstatica.mostrarMensagem();
        SubClasseAbstrata c1 = new SubClasseAbstrata();
        c1.mostrarMensagem();
        ClasseRecord c2 = new ClasseRecord("Carla");
    }
}
