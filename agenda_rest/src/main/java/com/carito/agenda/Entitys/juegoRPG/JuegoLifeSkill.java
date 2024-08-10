package com.carito.agenda.Entitys.juegoRPG;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name="LifeSkill")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class JuegoLifeSkill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_lifeSkill")
    private Long lifeSkill_Id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "img")
    private byte[] img;

    @Column(name = "energia")
    private Integer energia;

@OneToOne
@JoinColumn(name = "item_Requerido", nullable=false)
    private Item itemRequerido;

}
