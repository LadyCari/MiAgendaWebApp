package com.carito.agenda.Entitys;

import com.carito.agenda.Entitys.juegoRPG.Tipo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name="link_importante_curso")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LinkImportanteCurso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "link_curso_importante_id")
    private Long linkImportanteId;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "link")
    private String link;

    @ManyToOne
    @JoinColumn (name = "dato_id")
    @JsonIgnore
    private DatosPrivadosCurso dato;
}
