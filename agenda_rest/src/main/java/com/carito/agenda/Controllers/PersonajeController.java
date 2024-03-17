package com.carito.agenda.Controllers;

import com.carito.agenda.DTOs.PersonajeCompletoDTO;
import com.carito.agenda.Entitys.Link;
import com.carito.agenda.Excepcion.CustomException;
import com.carito.agenda.Services.PersonajeService;
import com.carito.agenda.web.AjaxResponseGenerator;
import com.carito.agenda.web.AjaxResponseObject;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Log4j2
@RestController
@RequestMapping("/personaje")
public class PersonajeController {
    @Autowired
    private PersonajeService personajeService;

    @RequestMapping(value = "/nuevo-personaje", produces = { "application/json" }, method = RequestMethod.POST)
    public AjaxResponseObject postPersonaje(@RequestBody PersonajeCompletoDTO data) {
        personajeService.guardarPersonaje(data);
        return AjaxResponseGenerator.createSimpleResponseOK("OK");
    }
    @RequestMapping(value = "/personaje-completo", produces = { "application/json" }, method = RequestMethod.GET)
    public AjaxResponseObject getPersonajeCompleto(@RequestParam("id") Long id) {
        PersonajeCompletoDTO personaje = personajeService.getPersonajeById(id);
        return AjaxResponseGenerator.createSimpleResponseOK(personaje);
    }

    @RequestMapping(value = "/modificar-personaje", produces = { "application/json" }, method = RequestMethod.PUT)
    public AjaxResponseObject editPersonaje(@RequestBody PersonajeCompletoDTO data) {
        personajeService.modificarPersonaje(data);
        return AjaxResponseGenerator.createSimpleResponseOK("OK");
    }

    @RequestMapping(value = "/delete-personaje", produces = { "application/json" }, method = RequestMethod.DELETE)
    public AjaxResponseObject deletePersonaje(@RequestParam("personajeId") Long id) {
        try {
            personajeService.deletePersonaje(id);
            return AjaxResponseGenerator.createSimpleResponseOK("Personaje eliminado correctamente");
        }
        catch (CustomException e) {
            return AjaxResponseGenerator.createSimpleResponseError("Ocurrio un error");
        }
    }

}
