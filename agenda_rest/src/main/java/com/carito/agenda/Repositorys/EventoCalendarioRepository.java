package com.carito.agenda.Repositorys;

import com.carito.agenda.Entitys.EventoCalendario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface EventoCalendarioRepository extends JpaRepository<EventoCalendario, Long> {
    List<EventoCalendario> findAllByFechaInicioAfterAndFechaFinBefore(LocalDateTime startDateTime, LocalDateTime endDateTime);
}
