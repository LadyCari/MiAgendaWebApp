package com.carito.agenda.DTOs.juegoRPG;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MascotaDTO {

    @JsonProperty("nombre")
    private String nombre;

    @JsonProperty("imagen")
    private byte[] imagen;
}
