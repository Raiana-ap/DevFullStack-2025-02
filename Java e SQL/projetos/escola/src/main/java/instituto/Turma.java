package instituto;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Turma {
    @Id
    @Column(name = "id_turma")
    private Long idTurma;
    @Column(name = "nome_turma")
    private String nomeTurma;
    private String sala;
    private LocalDateTime horario;

    public Long getIdTurma() {return idTurma;}
    public void setIdTurma(Long idTurma) {this.idTurma = idTurma;}

    public String getNomeTurma() {return nomeTurma;}
    public void setNomeTurma(String nomeTurma) {this.nomeTurma = nomeTurma;}

    public String getSala() {return sala;}
    public void setSala(String sala) {this.sala = sala;}

    public LocalDateTime getHorario() {return horario;}
    public void setHorario(LocalDateTime horario) {this.horario = horario;}
}
