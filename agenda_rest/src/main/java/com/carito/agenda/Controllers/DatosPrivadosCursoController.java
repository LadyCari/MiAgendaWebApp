package com.carito.agenda.Controllers;

import com.carito.agenda.Entitys.ActividadesSemanales;
import com.carito.agenda.Entitys.DatosPrivadosCurso;
import com.carito.agenda.Excepcion.CustomException;
import com.carito.agenda.Services.ActividadesSemanalesService;
import com.carito.agenda.Services.DatosPrivadosCursoService;
import com.carito.agenda.web.AjaxResponseGenerator;
import com.carito.agenda.web.AjaxResponseObject;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Log4j2
@RestController
@RequestMapping("/datos-privados-curso")
public class DatosPrivadosCursoController {

    @Autowired
    private DatosPrivadosCursoService datosPrivadosCursoService;

    @RequestMapping(value = "/get-datos", produces = { "application/json" }, method = RequestMethod.GET)
    public AjaxResponseObject getDatosPrivadosCurso(@RequestParam ("cursando") boolean cursando) {
        return AjaxResponseGenerator.createSimpleResponseOK(datosPrivadosCursoService.getDatosPrivadosCurso(cursando));
    }

    @RequestMapping(value = "/get-dato", produces = { "application/json" }, method = RequestMethod.GET)
    public AjaxResponseObject getDatosPrivadosCurso(@RequestParam ("id") Long id) {
        return AjaxResponseGenerator.createSimpleResponseOK(datosPrivadosCursoService.getCurso(id));
    }


    @RequestMapping(value = "/crear-datos", produces = { "application/json" }, method = RequestMethod.POST)
    public AjaxResponseObject guardarDatosPrivadosCurso(@RequestBody DatosPrivadosCurso datosPrivadosCurso) {
        try {
            datosPrivadosCursoService.saveDatosPrivados(datosPrivadosCurso);
            return AjaxResponseGenerator.createSimpleResponseOK("Dato creado correctamente!");
        }
        catch (CustomException e) {
            return AjaxResponseGenerator.createSimpleResponseError("Ocurrio un error");
        }
    }

    @RequestMapping(value = "/delete-datos", produces = { "application/json" }, method = RequestMethod.DELETE)
    public AjaxResponseObject eliminarDatosPrivadosCurso(@RequestParam("id") Long id) {
        try {
            datosPrivadosCursoService.deleteDatosPrivados(id);
            return AjaxResponseGenerator.createSimpleResponseOK("Actividad eliminada correctamente");
        }
        catch (CustomException e) {
            return AjaxResponseGenerator.createSimpleResponseError("Ocurrio un error");
        }
    }
}
