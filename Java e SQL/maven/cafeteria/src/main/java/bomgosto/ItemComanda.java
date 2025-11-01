package bomgosto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ItemComanda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idItemComanda;
    private Comanda comanda;
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
