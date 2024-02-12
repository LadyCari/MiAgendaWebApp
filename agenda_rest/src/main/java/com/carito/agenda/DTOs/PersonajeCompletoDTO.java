package com.carito.agenda.DTOs;

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
public class PersonajeCompletoDTO {
    @JsonProperty("idPersonaje")
    private Long idPersonaje;

    @JsonProperty("nombre")
    private String nombre;

    @JsonProperty("idClase")
    private Long idClase;

    @JsonProperty("objetivo")
    private String objetivo;

    @JsonProperty("foto")
    private byte[] foto;

    @JsonProperty("fotoSet")
    private byte[] fotoSet;

    @JsonProperty("temporada")
    private boolean temporada;

    @JsonProperty("chenga")
    private boolean chenga;

    @JsonProperty("inventario")
    private boolean inventario;

    @JsonProperty("casco")
    private boolean casco;

    @JsonProperty("guante")
    private boolean guante;

    @JsonProperty("zapato")
    private boolean zapato;

    @JsonProperty("pechera")
    private boolean pechera;

    @JsonProperty("anillo1")
    private boolean anillo1;

    @JsonProperty("anillo2")
    private boolean anillo2;

    @JsonProperty("arete1")
    private boolean arete1;

    @JsonProperty("arete2")
    private boolean arete2;

    @JsonProperty("collar")
    private boolean collar;

    @JsonProperty("cinturon")
    private boolean cinturon;

    @JsonProperty("armaPrincipal")
    private boolean armaPrincipal;

    @JsonProperty("armaSecundaria")
    private boolean armaSecundaria;

    @JsonProperty("armaDespertar")
    private boolean armaDespertar;

}
