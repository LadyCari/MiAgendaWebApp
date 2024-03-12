package com.carito.agenda.Controllers;

import com.carito.agenda.DTOs.PersonajeConFotoDTO;
import com.carito.agenda.Entitys.Pendientes;
import com.carito.agenda.Excepcion.CustomException;
import com.carito.agenda.Services.DashboardService;
import com.carito.agenda.web.AjaxResponseGenerator;
import com.carito.agenda.web.AjaxResponseObject;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Log4j2
@RestController
@RequestMapping("/tareas")
public class DashboardController {
    @Autowired
    private DashboardService dashboardService;

    @RequestMapping(value = "/get-tareas", produces = { "application/json" }, method = RequestMethod.GET)
    public AjaxResponseObject getTareasPendientes() {
        List<Pendientes> tareas = dashboardService.getTareasPendientes();
        return AjaxResponseGenerator.createSimpleResponseOK(tareas);
    }

    @RequestMapping(value = "/crear", produces = { "application/json" }, method = RequestMethod.POST)
    public AjaxResponseObject crearTareaPendiente(@RequestBody Pendientes pendientes) {
        try {
            Pendientes pendiente = dashboardService.saveTareas(pendientes);
            return AjaxResponseGenerator.createSimpleResponseOK(pendiente);
        }
        catch (CustomException e) {
            return AjaxResponseGenerator.createSimpleResponseError("Ocurrio un error");
        }
    }

    @RequestMapping(value = "/delete", produces = { "application/json" }, method = RequestMethod.DELETE)
    public AjaxResponseObject deleteTarea(@RequestParam("id") Long id) {
        try {
            dashboardService.deleteTareas(id);
            return AjaxResponseGenerator.createSimpleResponseOK("Tarea eliminada correctamente");
        }
        catch (CustomException e) {
            return AjaxResponseGenerator.createSimpleResponseError("Ocurrio un error");
        }
    }
}
