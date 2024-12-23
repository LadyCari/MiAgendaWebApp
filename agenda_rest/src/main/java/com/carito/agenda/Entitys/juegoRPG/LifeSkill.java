package com.carito.agenda.Entitys.juegoRPG;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "life_skill")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class LifeSkill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_life_skill")
    private Long lifeSkillId;

    @Column(name = "nombre")
    private String nombre;

    @Column (name = "imagen")
    private byte[] imagen;

    @Column(name = "nivel")
    private Integer nivel;

    @Column(name = "experienciaActual")
    private Double experienciaActual;
}
