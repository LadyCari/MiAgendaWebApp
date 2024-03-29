package com.carito.agenda.Entitys;
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
    private Double horaInicio;

    @Column(name = "hora_fin")
    private Double horaFin;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
            name = "dias_actividades_semanales",
            joinColumns = @JoinColumn(name = "actividad_id"),
            inverseJoinColumns = @JoinColumn(name = "name"))
    private List<Dia> dia;

}

