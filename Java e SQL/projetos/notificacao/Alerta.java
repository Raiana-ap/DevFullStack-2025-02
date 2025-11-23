public class Alerta {
    private final EnviadorNotificacao notificador;

    public Alerta(EnviadorNotificacao notificador) {
        this.notificador = notificador;
    }

    public void disparar(String destino) {
        notificador.enviar(destino, "Seu relat;orio está pronto!");
    }

    public static void main(String[] args) {
        Alerta alertaEmail = new Alerta(new EmailNotificador());
        Alerta alertaSms = new Alerta(new SmsNotificador());
        alertaEmail.disparar("Jorge@daOficina.com");
        alertaSms.disparar("Tiburis@bol.com");
    }
}