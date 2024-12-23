package com.carito.agenda.Entitys.juegoRPG;

import com.carito.agenda.Enumerables.juegoRPG.Elemento;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "mascota")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Mascota {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_mascota")
    private Long mascotaId;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "nivel")
    private Integer nivel;

    @JoinColumn (name = "imagen")
    private byte[] imagen;

    @Column(name = "elemento")
    private Elemento elemento;

    @Column(name = "activa")
    private Boolean activa;


}
