package com.carito.agenda.Entitys.juegoRPG;

import javax.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Tier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTier;
}
