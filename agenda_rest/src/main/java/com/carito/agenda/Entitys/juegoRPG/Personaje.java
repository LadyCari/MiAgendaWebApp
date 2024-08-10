package com.carito.agenda.Entitys.juegoRPG;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "personaje")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Personaje {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "nombre")
    private String nombre;

    @Column(name = "dinero")
    private Double dinero;

    @OneToMany(mappedBy = "nombre")
    private List<Item> iventario;
}
