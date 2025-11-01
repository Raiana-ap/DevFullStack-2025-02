package com.exemplo.cafeteria;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Cardapio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cardapio")
    private long idCardapio;
    private String nome;
    private String descricao;
    @Column(name = "preco_unitario")
    private Double precoUnitario;

    public long getIdCardapio() {return idCardapio;}
    public void setIdCardapio(long idCardapio) {this.idCardapio = idCardapio;}

    public String getNome() {return nome;}
    public void setNome(String nome) {this.nome = nome;}

    public String getDescricao() {return descricao;}
    public void setDescricao(String descricao) {this.descricao = descricao;}

    public Double getPrecoUnitario() {return precoUnitario;}
    public void setPrecoUnitario(Double precoUnitario) {this.precoUnitario = precoUnitario;}
}

