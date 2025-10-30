import java.time.LocalDateTime;
import java.util.*;

public class GerenciadorFilaAtendimento {
        enum Tipo {PREFERENCIAL, NORMAL}
        static final class Senha {
            final Tipo tipo;
            final String codigo;
            final LocalDateTime chegada;
            LocalDateTime atendimento;
            Senha(Tipo tipo, String codigo, LocalDateTime chegada) {
                this.tipo = tipo;
                this.codigo = codigo;
                this.chegada = chegada;
                this.atendimento = LocalDateTime.now();
            }
        }
    private static void imprimir(){
        System.out.println(
                "===Gerenciador de Fila (2 preferênciais, 1 normal)===" +
                "Comandos: \n Chegar P: adiciona senha preferencial" +
                "Chegar N: adiciona senha normal \n" +
                "Atender: Chama a próxima senha (Regra: 2p : 1N) \n" +
                "Histórico: Mostra o histórico de chamadas \n" +
                "Sair: Encerra imprimindo o histórico");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Deque<Senha> filaPref = new ArrayDeque<>();
        Deque<Senha> filaNormal = new ArrayDeque<>();
        List<Senha> historico = new ArrayList<>();

        int seqPref = 1;
        int seqNormal = 1;

        int atendimentoSeguidoPreferenciais = 0;
        imprimir();
        while (true){
            String linha = sc.nextLine().trim();
            if(linha.length() == 0) continue;
            String in = linha.toLowerCase(Locale.ROOT).trim();
            switch (in){
                case "atender":
                    if(filaNormal.isEmpty() && filaPref.isEmpty()){
                        System.out.println("Nenhum atendimento em espera.");
                        continue;
                    }
                    if(atendimentoSeguidoPreferenciais < 2 && !filaPref.isEmpty()){
                        atender(filaPref, historico);
                        atendimentoSeguidoPreferenciais++;
                    } else if (!filaNormal.isEmpty()) {
                        atender(filaNormal, historico);
                        atendimentoSeguidoPreferenciais = 0;
                    } else if (!filaPref.isEmpty()) {
                        atender(filaPref, historico);
                        if(atendimentoSeguidoPreferenciais < 2){
                            atendimentoSeguidoPreferenciais++;
                        }
                    }else{
                        System.out.println("Nenhum atendimento disponível.");
                    }
                    break;
                case "historico":
                    imprimirHistorico(historico);
                    break;
                case "sair":
                    imprimirHistorico(historico);
                    sc.close();
                    return;
                default:
                    if(in.startsWith("chegar")){
                        String qual = in.substring("chegar".length()).trim();
                        if(qual.equals("n")){
                            String codigo = "n" + String.format("%06d", seqNormal++);
                            var s = new Senha(Tipo.NORMAL, codigo, LocalDateTime.now());
                            filaNormal.addLast(s);
                            System.out.println("Chegada registrada " + codigo + "(Normal). Em espera:" + filaNormal.size());
                        } else if(qual.equals("p")){
                                String codigo = "p" + String.format("%06d", seqPref++);
                                var s = new Senha(Tipo.PREFERENCIAL, codigo, LocalDateTime.now());
                                filaPref.addLast(s);
                                System.out.println("Chegada registrada " + codigo + "(Preferencial). Em espera:" + filaPref.size());

                            }else{
                            System.out.println("Comando não reconhecido.");
                        }
                    }
                    break;
            }
        }
    }
    private static void atender(Deque<Senha> fila, List<Senha> historico){
            Senha s = fila.pollFirst();
            if(s == null) {
                System.out.println("Fila vazia");
                return;
            }
            s.atendimento = LocalDateTime.now();
            historico.add(s);
            System.out.println("Chamando " + s.codigo + (s.tipo == Tipo.PREFERENCIAL ? "preferencial" : "normal"));
    }

    private static void imprimirHistorico(List<Senha> historico){
            if(historico.isEmpty()){
                System.out.println("Não houve nenhum atendimento.");
                return;
            }
            for(Senha s: historico) System.out.println(s);
    }
}
