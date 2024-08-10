package com.carito.agenda.Enumerables.juegoRPG;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public enum TierHerramientaArmadura {

    MADERA("Madera"),
    COBRE("Cobre"),
    HIERRO("Hierro"),
    ORO("Oro"),
    NEPHTUNIO("Nephtunio"),
    AMATISTA("Amastista"),
    RUBI("Rubi"),
    DIAMANTE("Diamante");

    private String nombre;

    public String getTipo() {
        return nombre;
    }
}
