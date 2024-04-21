package com.carito.agenda.Controllers;

import com.carito.agenda.Entitys.EventoCalendario;
import com.carito.agenda.Entitys.Pendientes;
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
@RequestMapping("/evento")
public class EventoController {
    @Autowired
    private EventoCalendarioService eventoCalendarioService;

    @RequestMapping(value = "/get-eventos", produces = { "application/json" }, method = RequestMethod.GET)
    public AjaxResponseObject getTareasPendientes(@RequestParam("mes") Integer mes,
                                                  @RequestParam("anio") Integer anio) {
        return AjaxResponseGenerator.createSimpleResponseOK(eventoCalendarioService.getEventos(mes,anio));
    }

    @RequestMapping(value = "/crear", produces = { "application/json" }, method = RequestMethod.POST)
    public AjaxResponseObject crearTareaPendiente(@RequestBody EventoCalendario evento) {
        try {
            eventoCalendarioService.save(evento);
            return AjaxResponseGenerator.createSimpleResponseOK("OK");
        }
        catch (CustomException e) {
            return AjaxResponseGenerator.createSimpleResponseError("Ocurrio un error");
        }
    }

    @RequestMapping(value = "/delete", produces = { "application/json" }, method = RequestMethod.DELETE)
    public AjaxResponseObject deleteTarea(@RequestParam("id") Long id) {
        try {
            eventoCalendarioService.delete(id);
            return AjaxResponseGenerator.createSimpleResponseOK("Tarea eliminada correctamente");
        }
        catch (CustomException e) {
            return AjaxResponseGenerator.createSimpleResponseError("Ocurrio un error");
        }
    }
}
