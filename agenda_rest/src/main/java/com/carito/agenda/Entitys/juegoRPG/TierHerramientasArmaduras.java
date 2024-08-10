package com.carito.agenda.Entitys.juegoRPG;

import com.carito.agenda.Enumerables.juegoRPG.TierHerramientaArmadura;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class TierHerramientasArmaduras extends Tier{

    @Column(name = "nombre")
    private TierHerramientaArmadura nombre;
}
