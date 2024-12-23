package com.carito.agenda.Enumerables.juegoRPG;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public enum StatsNombre {

    FUERZA("Fuerza"),
    INTELIGENCIA("Inteligencia"),
    AGILIDAD("Agilidad"),
    VIDA("Vida"),
    MANA("Mana"),
    DEFENSA("Defensa"),
    STAMINA("Stamina");

    private String nombre;

    public String getNombre() {
        return nombre;
    }

}
