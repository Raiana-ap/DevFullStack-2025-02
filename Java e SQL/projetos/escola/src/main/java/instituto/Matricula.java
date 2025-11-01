package instituto;

import javax.persistence.*;

@Entity
public class Matricula {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_matricula")
    private Long idMatricula;
    @ManyToOne
    @JoinColumn(name = "id_aluno")
    private Aluno aluno;
    @ManyToOne
    @JoinColumn(name = "id_turma")
    private Turma turma;
    private Double nota1;
    private Double nota2;
    private Double nota3;
    @Column(name = "nota_final")
    private Double notaFinal;
    @Column(name = "numero_faltas")
    private Integer numFaltas;

    public Long getIdMatricula() {return idMatricula;}
    public void setIdMatricula(Long idMatricula) {this.idMatricula = idMatricula;}

    public  Aluno getAluno() {return aluno;}
    public void setAluno(Aluno aluno) {this.aluno = aluno;}

    public  Turma getTurma() {return turma;}
    public void setTurma(Turma turma) {this.turma = turma;}

    public  Double getNota1() {return nota1;}
    public void setNota1(Double nota1) {this.nota1 = nota1;}

    public  Double getNota2() {return nota2;}
    public void setNota2(Double nota2) {this.nota2 = nota2;}

    public  Double getNota3() {return nota3;}
    public void setNota3(Double nota3) {this.nota3 = nota3;}

    public  Double getNotaFinal() {return notaFinal;}
    public void setNotaFinal(Double notaFinal) {this.notaFinal = notaFinal;}

    public Integer getNumFaltas() {return numFaltas;}
    public void setNumFaltas(Integer numFaltas) {this.numFaltas = numFaltas;}
}
