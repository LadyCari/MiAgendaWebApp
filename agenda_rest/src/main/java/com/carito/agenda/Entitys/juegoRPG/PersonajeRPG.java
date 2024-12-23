package com.carito.agenda.Entitys.juegoRPG;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "personaje_rpg")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PersonajeRPG {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_personaje_rpg")
    private Long personajeRPGId;

    @JsonProperty("nombre")
    private String nombre;

    @JsonProperty("imagen")
    private byte[] imagen;

    @Column(name = "dinero")
    private Long dinero;

    @ManyToMany
    @JoinTable(
            name = "pet_usuario",
            joinColumns = @JoinColumn(name = "id_personaje_rpg"),
            inverseJoinColumns = @JoinColumn(name = "id_mascota")
    )
    private List<Mascota> listaMascotas;

    @ManyToMany
    @JoinTable(
            name = "pj_principal_stats",
            joinColumns = @JoinColumn(name = "id_personaje_rpg"),
            inverseJoinColumns = @JoinColumn(name = "id_stats")
    )
    private List<Stats> listaStats;



}
