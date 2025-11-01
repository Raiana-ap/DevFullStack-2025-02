package bomgosto;

import java.time.LocalDate;

public class Comanda {
    private long idComanda;
    private String nomeCliente;
    private LocalDate  data;
    private double valor;
    private int numMesa;

    public long getIdComanda() {return idComanda;}
    public void setIdComanda(long idComanda) {}

    public String getNomeCliente() {return nomeCliente;}
    public void setNomeCliente(String nomeCliente) {this.nomeCliente = nomeCliente;}

    public LocalDate  getData() {return data;}
    public void setData(LocalDate  data) {this.data = data;}

    public double getValor() {return valor;}
    public void setValor(double valor) {this.valor = valor;}

    public int getNumMesa() {return numMesa;}
    public void setNumMesa(int numMesa) {this.numMesa = numMesa;}

}
