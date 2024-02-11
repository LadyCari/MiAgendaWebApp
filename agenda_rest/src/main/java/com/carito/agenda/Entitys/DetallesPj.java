package com.carito.agenda.Entitys;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name="detalles_pj")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DetallesPj {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_detalles_pj")
    private Long detallesId;

    @Column(name = "temporada")
    private boolean temporada;

    @Column(name = "objetivo")
    private String objetivo;
}
