package com.carito.agenda.Entitys.juegoRPG;

import com.carito.agenda.Enumerables.juegoRPG.StatsNombre;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "stats")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Stats {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_stats")
    private Long statsId;

    @JoinColumn (name = "nombre")
    private StatsNombre nombre;

    @JoinColumn (name = "imagen")
    private byte[] imagen;
}
