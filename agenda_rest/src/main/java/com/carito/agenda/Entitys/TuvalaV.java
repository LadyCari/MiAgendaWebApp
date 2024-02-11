package com.carito.agenda.Entitys;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name="tuvala_v")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TuvalaV {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_inventario_tuvala")
    private Long inventarioId;

    @Column(name = "casco")
    private boolean casco;

    @Column(name = "guante")
    private boolean guante;

    @Column(name = "zapato")
    private boolean zapato;

    @Column(name = "pechera")
    private boolean pechera;

    @Column(name = "anillo1")
    private boolean anillo1;

    @Column(name = "anillo2")
    private boolean anillo2;

    @Column(name = "arete1")
    private boolean arete1;

    @Column(name = "arete2")
    private boolean arete2;

    @Column(name = "collar")
    private boolean collar;

    @Column(name = "cinturon")
    private boolean cinturon;

    @Column(name = "arma_principal")
    private boolean armaPrincipal;

    @Column(name = "arma_secundaria")
    private boolean armaSecundaria;

    @Column(name = "arma_despertar")
    private boolean armaDespertar;
}
