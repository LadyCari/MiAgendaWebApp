package com.carito.agenda.Services;

import com.carito.agenda.Entitys.EventoCalendario;
import com.carito.agenda.Repositorys.EventoCalendarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class EventoCalendarioService {
    @Autowired
    private EventoCalendarioRepository eventoCalendarioRepository;

    public void save(EventoCalendario evento) {
        eventoCalendarioRepository.save(evento);
    }

    public List<EventoCalendario> getEventos(Integer mes, Integer anio) {
        LocalDateTime startOfMonth = LocalDateTime.of(anio, mes, 1, 0, 0, 0);
        LocalDateTime endOfMonth = startOfMonth.plusMonths(1);

        return eventoCalendarioRepository.findAllByFechaInicioAfterAndFechaFinBefore(startOfMonth, endOfMonth);
    }

    public void delete(Long id) {
        eventoCalendarioRepository.delete(eventoCalendarioRepository.findById(id).get());
    }
}
