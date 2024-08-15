package com.carito.agenda.DTOs;

import com.carito.agenda.Entitys.ItemPalia;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DatosPrivadosCursoDTO {

    @JsonProperty("nombre")
    private String nombre;

    @JsonProperty("datosPrivadosCursoId")
    private Long datosPrivadosCursoId;
}
