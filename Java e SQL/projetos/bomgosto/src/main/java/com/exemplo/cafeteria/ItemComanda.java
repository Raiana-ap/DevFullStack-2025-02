package com.exemplo.cafeteria;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class ItemComanda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idItemComanda;

    @ManyToOne
    @JoinColumn(name = "id_comanda")
    private Comanda comanda;

     @ManyToOne
    @JoinColumn(name = "id_cardapio")
    private Cardapio cardapio;
    private int quantidade;

    public long getIdItemComanda() {return idItemComanda;}
    public void setIdItemComanda(long idItemComanda) {this.idItemComanda = idItemComanda;}

    public Comanda getComanda() {return comanda;}
    public void setComanda(Comanda comanda){this.comanda = comanda;}

    public Cardapio getCardapio() {return cardapio;}
    public void setCardapio(Cardapio cardapio) {this.cardapio = cardapio;}

    public int getQuantidade() {return quantidade;}
    public void setQuantidade(int quantidade) {this.quantidade = quantidade;}

}
