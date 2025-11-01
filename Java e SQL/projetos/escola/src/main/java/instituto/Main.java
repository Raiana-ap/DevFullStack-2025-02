package instituto;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class Main {
    public static void main(String[] args) {

        SessionFactory factory = new Configuration()
                .configure()
                .addAnnotatedClass(Aluno.class)
                .addAnnotatedClass(Turma.class)
                .addAnnotatedClass(Matricula.class)
                .buildSessionFactory();

        Session session = factory.openSession();

        try {
            session.beginTransaction();

            Aluno aluno1 = new Aluno();
            aluno1.setNome("Pedro Henrique");
            aluno1.setCurso("Informatica");
            aluno1.setNivel("Avancado");
            aluno1.setIdade(18);

            session.save(aluno1);
            session.getTransaction().commit();

            System.out.println("Aluno salvo com sucesso!");

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            session.close();
            factory.close();
        }

    }
}
