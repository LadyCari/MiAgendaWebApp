package com.carito.agenda.Entitys;

import com.carito.agenda.Enumerables.DiasSemanas;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="datos_privados_curso")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DatosPrivadosCurso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "datos_privados_curso_id")
    private Long datosPrivadosCursoId;

    @Column(name = "nombre")
    private String nombre;

    @ElementCollection(targetClass = DiasSemanas.class)
    @JoinTable(name = "datos_privados_curso_dia", joinColumns = @JoinColumn(name = "id"))
    @Column(name = "dia", nullable = false)
    @Enumerated(EnumType.STRING)
    private List<DiasSemanas> dia;

    @OneToMany(mappedBy = "linkImportanteId")
    private List<LinkImportanteCurso> links;

    @Column(name = "hora_inicio")
    private String horarioInicio;

    @Column(name = "hora_fin")
    private String horarioFin;

    @Column(name = "comision")
    private Integer comision;

    @Column(name = "logo_curso")
    private String urlLogo;

    @Column(name = "cursando")
    private boolean cursando;
}
