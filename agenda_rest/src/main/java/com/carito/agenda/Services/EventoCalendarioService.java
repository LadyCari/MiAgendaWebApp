package com.carito.agenda.Services;

import com.carito.agenda.Entitys.EventoCalendario;
import com.carito.agenda.Entitys.Pendientes;
import com.carito.agenda.Repositorys.EventoCalendarioRepository;
import com.carito.agenda.Repositorys.PendientesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.YearMonth;
import java.util.List;
@Service
public class EventoCalendarioService {

    @Autowired
    private EventoCalendarioRepository eventoCalendarioRepository;

    public List<EventoCalendario> getEventosCalendario(Integer mes, Integer ano) {
        // Crear el primer día del mes
        LocalDate fechaInicio = LocalDate.of(ano, mes, 1);

        // Crear el último día del mes
        YearMonth yearMonth = YearMonth.of(ano, mes);
        LocalDate fechaFin = yearMonth.atEndOfMonth();

        // Utilizar las fechas en la consulta
        return eventoCalendarioRepository.findAllByFechaInicioBetweenOrFechaFinBetween(fechaInicio, fechaFin, fechaInicio, fechaFin);
    }

    public EventoCalendario saveEventoCalendario(EventoCalendario evento) {return eventoCalendarioRepository.save(evento);}

    public void deleteEventoCalendario(Long id) {eventoCalendarioRepository.delete(eventoCalendarioRepository.findById(id).get());}
}
