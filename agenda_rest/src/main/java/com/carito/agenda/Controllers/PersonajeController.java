package com.carito.agenda.Controllers;

import com.carito.agenda.DTOs.PersonajeCompletoDTO;
import com.carito.agenda.Services.PersonajeService;
import com.carito.agenda.web.AjaxResponseGenerator;
import com.carito.agenda.web.AjaxResponseObject;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Log4j2
@RestController
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
}
