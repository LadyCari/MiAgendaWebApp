package com.carito.agenda.Entitys;

import com.carito.agenda.Enumerables.TipoEventoCalendario;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name="evento_calendario")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class EventoCalendario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_evento")
    private Long idEvento;

    @Column(name = "descripcion_evento")
    private String descripcionEvento;

    @Column(name = "tipo_evento")
    private TipoEventoCalendario tipoEvento;

    @Column(name = "fecha_inicio")
    private LocalDate fechaInicio;

    @Column(name = "fecha_fin")
    private LocalDate fechaFin;

    @Column(name = "horario")
    private String horaEvento;
}
