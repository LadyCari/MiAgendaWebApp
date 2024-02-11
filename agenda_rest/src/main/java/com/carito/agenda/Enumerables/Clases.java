package com.carito.agenda.Enumerables;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public enum Clases {
    GUERRERO("Guerrero"),
    RANGER("Ranger"),
    HECHICERA("Hechicera"),
    GIGANTE("Gigante"),
    DOMADORA("Domadora"),
    MUSA("Musa"),
    MAEHWA("Maehwa"),
    VALQUIRIA("Valquiria"),
    KUNOICHI("Kunoichi"),
    NINJA("Ninja"),
    MAGO("Mago"),
    BRUJA("Bruja"),
    STRIKER("Striker"),
    MYSTIC("Mystic"),
    LAHN("Lahn"),
    ARQUERO("Arquero"),
    DARK_KNIGHT("Dark Knight"),
    SHAI("Shai"),
    GUARDIANA("Guardiana"),
    HASHASHIN("Hashashin"),
    NOVA("Nova"),
    SAGE("Sage"),
    CORSAIR("Corsair"),
    DRAKANIA("Drakania"),
    WUSA("Wusa"),
    MAEGU("Maegu"),
    ERUDITA("Erudita");

    private String nombre;

    public String getNombre() {
        return nombre;
    }
}
