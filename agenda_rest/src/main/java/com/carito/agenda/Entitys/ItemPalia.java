package com.carito.agenda.Entitys;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name="item_palia")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ItemPalia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_item")
    private Long itemId;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "precio_compra")
    private Long precioCompra;

    @Column(name = "precio_venta")
    private Long precioVenta;

    @Column(name = "img")
    private byte[] img;
}
