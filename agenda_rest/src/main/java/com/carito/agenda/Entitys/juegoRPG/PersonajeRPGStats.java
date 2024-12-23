package com.carito.agenda.Entitys.juegoRPG;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "persona_rpg_stats")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PersonajeRPGStats {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_personaje_rpg_stats")
    private Long personajeRPGStatsId;

    
}
