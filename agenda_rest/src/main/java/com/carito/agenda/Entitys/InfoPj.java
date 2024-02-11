package com.carito.agenda.Entitys;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name="info_pj")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InfoPj {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pj")
    private Long idPj;

    @Column(name = "nombre_pj")
    private String nombre;

    @Column(name = "foto_pj")
    private byte[] foto;

    @Column(name = "set_pj")
    private byte[] set;

    @Column(name = "id_clase")
    private Long idClase;

    @Column(name = "id_inventario_tuvala")
    private Long idInventarioTuvala;

    @Column(name = "id_misiones_pj")
    private Long idMisiones;

    @Column(name = "id_detalles_pj")
    private Long idDetalles;
}
