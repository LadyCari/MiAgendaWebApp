package com.carito.agenda.Enumerables;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum TipoEventoCalendario {
    EXAMENTP ("Examen-tp"),
    TAREA ("Tarea"),
    MEDICO ("Medico"),
    EVENTO ("Evento"),
    OTRO ("Otro");

    private String value;

    TipoEventoCalendario(String value) {
        this.value = value;
    }

    @Override
    @JsonValue
    public String toString() {
        return String.valueOf(value);
    }

    @JsonCreator
    public static TipoEventoCalendario fromString(String key) {
        for(TipoEventoCalendario type : TipoEventoCalendario.values()) {
            if(type.name().equalsIgnoreCase(key)) {
                return type;
            }
        }
        return null;
    }
}
