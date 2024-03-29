package com.carito.agenda.Entitys;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="dia_semana")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Dia {
    @Id
    @Column(name = "nombre")
    private String nombre;
}
