package com.carito.agenda.Enumerables.juegoRPG;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public enum Elemento {

    FUEGO ("Fuego"),

    AGUA("Agua"),

    VIENTO("VIENTO"),

    LUZ("Luz"),

    OSCURIDAD("Oscuridad");

    private String nombre;

    public String getNombre() {
        return nombre;
    }
}
