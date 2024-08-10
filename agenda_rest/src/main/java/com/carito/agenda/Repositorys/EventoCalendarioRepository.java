package com.carito.agenda.Repositorys;

import com.carito.agenda.Entitys.EventoCalendario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface EventoCalendarioRepository extends JpaRepository <EventoCalendario, Long> {

    List<EventoCalendario> findAllByFechaInicioBetweenOrFechaFinBetween(LocalDate fechaInicio, LocalDate fechaInicio2, LocalDate fechaFin, LocalDate fechaFin2);
}
