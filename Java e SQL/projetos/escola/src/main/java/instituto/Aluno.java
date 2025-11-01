package instituto;

import javax.persistence.*;

@Entity
public class Aluno {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_aluno")
    private Long idAluno;
    private String nome;
    private String curso;
    private String nivel;
    private Integer idade;

    public Long getIdAluno() {return idAluno;}
    public void setIdAluno(Long idAluno) {this.idAluno = idAluno;}

    public String getNome() {return nome;}
    public void setNome(String nome) {this.nome = nome;}

    public String getCurso() {return curso;}
    public void setCurso(String curso) {this.curso = curso;}

    public String getNivel() {return nivel;}
    public void setNivel(String nivel) {this.nivel = nivel;}

    public Integer getIdade() {return idade;}
    public void setIdade(Integer idade) {this.idade = idade;}
}
