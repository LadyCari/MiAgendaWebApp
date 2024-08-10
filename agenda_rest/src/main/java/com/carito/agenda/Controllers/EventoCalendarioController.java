package com.carito.agenda.Controllers;

import com.carito.agenda.Entitys.EventoCalendario;
import com.carito.agenda.Excepcion.CustomException;
import com.carito.agenda.Services.EventoCalendarioService;
import com.carito.agenda.web.AjaxResponseGenerator;
import com.carito.agenda.web.AjaxResponseObject;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Log4j2
@RestController
@RequestMapping("/evento-calentario")

public class EventoCalendarioController {
    @Autowired
    private EventoCalendarioService eventoCalendarioService;

    @RequestMapping(value = "/get-eventos", produces = { "application/json" }, method = RequestMethod.GET)
    public AjaxResponseObject getEventoscalendario(@RequestParam("mes") Integer mes,
                                                   @RequestParam("ano") Integer ano) {
        List<EventoCalendario> eventos = eventoCalendarioService.getEventosCalendario(mes, ano);
        return AjaxResponseGenerator.createSimpleResponseOK(eventos);
    }

    @RequestMapping(value = "/crear", produces = { "application/json" }, method = RequestMethod.POST)
    public AjaxResponseObject crearEventoCalendario(@RequestBody EventoCalendario eventoCalendario) {
        try {
            EventoCalendario evento = eventoCalendarioService.saveEventoCalendario(eventoCalendario);
            return AjaxResponseGenerator.createSimpleResponseOK(evento);
        }
        catch (CustomException e) {
            return AjaxResponseGenerator.createSimpleResponseError("Ocurrio un error");
        }
    }

    @RequestMapping(value = "/delete", produces = { "application/json" }, method = RequestMethod.DELETE)
    public AjaxResponseObject deleteEventoCalendario(@RequestParam("id") Long id) {
        try {
            eventoCalendarioService.deleteEventoCalendario(id);
            return AjaxResponseGenerator.createSimpleResponseOK("Evento eliminado correctamente");
        }
        catch (CustomException e) {
            return AjaxResponseGenerator.createSimpleResponseError("Ocurrio un error");
        }
    }
}
