package com.exemplo.cafeteria;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Comanda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_comanda")
    private long idComanda;
    @Column(name = "nome_cliente")
    private String nomeCliente;
    private LocalDate data;
    private double valor;
    @Column(name = "num_mesa")
    private int numMesa;

    public long getIdComanda() {return idComanda;}
    public void setIdComanda(long idComanda) { this.idComanda = idComanda;}

    public String getNomeCliente() {return nomeCliente;}
    public void setNomeCliente(String nomeCliente) {this.nomeCliente = nomeCliente;}

    public LocalDate  getData() {return data;}
    public void setData(LocalDate  data) {this.data = data;}

    public double getValor() {return valor;}
    public void setValor(double valor) {this.valor = valor;}

    public int getNumMesa() {return numMesa;}
    public void setNumMesa(int numMesa) {this.numMesa = numMesa;}

}