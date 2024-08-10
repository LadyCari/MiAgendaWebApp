package com.carito.agenda.Enumerables.juegoRPG;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public enum TierDrop {
    COMUN("Comun"),
    POCOCOMUN("Poco comun"),
    RARO("Raro"),
    EPICO("Epico"),
    LEGENDARIO ("Legendario");

    private String nombre;

    public String getTipo() {
        return nombre;
    }
}
