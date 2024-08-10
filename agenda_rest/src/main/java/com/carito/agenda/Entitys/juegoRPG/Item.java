package com.carito.agenda.Entitys.juegoRPG;
import com.carito.agenda.Enumerables.juegoRPG.NombreTipo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
@Entity
@Table(name = "item")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_item")
    private Long itemId;

    @Column(name = "nombre")
    private String nombre;

    @ManyToOne
    @JoinColumn (name = "tipo")
    private Tipo tipoItem;
}
