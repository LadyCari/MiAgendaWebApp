package com.carito.agenda.Enumerables;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum DiasSemanas {

    LUNES ("Lunes"),
    MARTES ("Martes"),
    MIERCOLES ("Miercoles"),
    JUEVES ("Jueves"),
    VIERNES ("Viernes"),
    SABADO ("Sabado"),
    DOMINGO ("Domingo");

    private String value;

    DiasSemanas(String value) {
        this.value = value;
    }

    @Override
    @JsonValue
    public String toString() {
        return String.valueOf(value);
    }

    @JsonCreator
    public static DiasSemanas fromString(String key) {
        for(DiasSemanas type : DiasSemanas.values()) {
            if(type.name().equalsIgnoreCase(key)) {
                return type;
            }
        }
        return null;
}
}
