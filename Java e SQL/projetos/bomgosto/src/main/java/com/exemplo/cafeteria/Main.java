package com.exemplo.cafeteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class Main {
    public static void main(String[] args) {

        SessionFactory factory = new Configuration()
                .configure()
                .addAnnotatedClass(Comanda.class)
                .addAnnotatedClass(Cardapio.class)
                .addAnnotatedClass(ItemComanda.class)
                .buildSessionFactory();

        Session session = factory.openSession();

        try {
            session.beginTransaction();

            Cardapio cafe1 = new Cardapio();
            cafe1.setNome("Café de Java");
            cafe1.setDescricao("Direto da ilha");
            cafe1.setPrecoUnitario(1.50);

            session.save(cafe1);
            session.getTransaction().commit();

            System.out.println("Café salvo com sucesso!");

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            session.close();
            factory.close();
        }

    }
}
