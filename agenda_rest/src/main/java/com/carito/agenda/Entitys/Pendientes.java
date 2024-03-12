package com.carito.agenda.Entitys;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name="pendientes")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Pendientes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pendiente_id")
    private Long pendienteId;

    @Column(name = "tipo")
    private String tipo;

    @Column(name = "descripcion")
    private String descripcion;
}
