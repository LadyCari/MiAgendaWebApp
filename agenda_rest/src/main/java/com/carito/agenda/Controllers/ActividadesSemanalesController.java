package com.carito.agenda.Controllers;

import com.carito.agenda.Entitys.ActividadesSemanales;
import com.carito.agenda.Entitys.Pendientes;
import com.carito.agenda.Excepcion.CustomException;
import com.carito.agenda.Services.ActividadesSemanalesService;
import com.carito.agenda.web.AjaxResponseGenerator;
import com.carito.agenda.web.AjaxResponseObject;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@Log4j2
@RestController
@RequestMapping("/actividades-semanales")
public class ActividadesSemanalesController {

    @Autowired
    private ActividadesSemanalesService actividadesSemanalesService;

    @RequestMapping(value = "/get", produces = { "application/json" }, method = RequestMethod.GET)
    public AjaxResponseObject getActividadesSemanales() {
        return AjaxResponseGenerator.createSimpleResponseOK(actividadesSemanalesService.obtenerActividadesSemanales());
    }


    @RequestMapping(value = "/crear", produces = { "application/json" }, method = RequestMethod.POST)
    public AjaxResponseObject guardarActividadSemanal(@RequestBody ActividadesSemanales actividadesSemanales) {
        try {
            return AjaxResponseGenerator.createSimpleResponseOK(actividadesSemanalesService.guardarActividadSemanal(actividadesSemanales));
        }
        catch (CustomException e) {
            return AjaxResponseGenerator.createSimpleResponseError("Ocurrio un error");
        }
    }

    @RequestMapping(value = "/delete", produces = { "application/json" }, method = RequestMethod.DELETE)
    public AjaxResponseObject eliminarActividadSemanal(@RequestParam("id") Long id) {
        try {
            actividadesSemanalesService.eliminarActividadesSemanales(id);
            return AjaxResponseGenerator.createSimpleResponseOK("Actividad eliminada correctamente");
        }
        catch (CustomException e) {
            return AjaxResponseGenerator.createSimpleResponseError("Ocurrio un error");
        }
    }

}
