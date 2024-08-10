package com.carito.agenda.Enumerables.juegoRPG;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public enum NombreTipo {

    ARMADURA("Armadura"),
    DROP("Drop"),
    HERRAMIENTA("Herramienta");

    private String nombre;

    public String getTipo() {
        return nombre;
    }
}
