package com.carito.agenda.DTOs;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PersonajeConFotoDTO {
    @JsonProperty("idPersonaje")
    private Long idPersonaje;

    @JsonProperty("nombre")
    private String nombre;

    @JsonProperty("clase")
    private String clase;

    @JsonProperty("foto")
    private byte[] foto;
}
