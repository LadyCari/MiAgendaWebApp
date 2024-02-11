package com.carito.agenda.Entitys;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name="misiones_pj")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MisionesPj {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_misiones_pj")
    private Long misionesId;

    @Column(name = "chenga")
    private boolean chenga;

    @Column(name = "inventario")
    private boolean inventario;
}
