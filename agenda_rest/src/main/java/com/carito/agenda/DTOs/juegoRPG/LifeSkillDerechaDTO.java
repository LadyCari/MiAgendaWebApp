package com.carito.agenda.DTOs.juegoRPG;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LifeSkillDerechaDTO {

    @JsonProperty("nombre")
    private String nombre;

    @JsonProperty("imagen")
    private byte[] imagen;

    @Column(name = "nivel")
    private Integer nivel;

    @Column(name = "experienciaActual")
    private Double experienciaActual;
}
