package com.carito.agenda.Entitys;
import com.carito.agenda.Enumerables.DiasSemanas;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="actividades_semanales")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ActividadesSemanales {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "actividad_id")
    private Long actividadId;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "hora_inicio")
    private String horarioInicio;

    @Column(name = "hora_fin")
    private String horarioFin;

    @ElementCollection(targetClass = DiasSemanas.class)
    @JoinTable(name = "actividades_semanales_dia", joinColumns = @JoinColumn(name = "id"))
    @Column(name = "dia", nullable = false)
    @Enumerated(EnumType.STRING)
    private List<DiasSemanas> dia;

}

