package com.carito.agenda.Entitys.juegoRPG;
import com.carito.agenda.Enumerables.juegoRPG.NombreTipo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
@Entity
@Table(name = "tipo")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Tipo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_tipo")
    private Long tipoId;

    @Column(name = "nombre")
    private NombreTipo nombre;

    @OneToOne
    @JoinColumn(name = "tier", nullable=false)
    private Tier tier;

}
