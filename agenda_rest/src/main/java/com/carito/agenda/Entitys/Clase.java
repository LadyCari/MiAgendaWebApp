package com.carito.agenda.Entitys;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name="clase_pj")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Clase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_clase")
    private Long claseId;

    @Column(name = "nombre_clase")
    private String nombre;
}
