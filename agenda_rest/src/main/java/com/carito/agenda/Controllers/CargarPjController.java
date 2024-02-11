package com.carito.agenda.Controllers;

import com.carito.agenda.DTOs.PersonajeCompletoDTO;
import com.carito.agenda.DTOs.PersonajeConFotoDTO;
import com.carito.agenda.Entitys.Clase;
import com.carito.agenda.Services.ClaseService;
import com.carito.agenda.Services.PersonajeService;
import com.carito.agenda.web.AjaxResponseGenerator;
import com.carito.agenda.web.AjaxResponseObject;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Log4j2
@RestController
public class CargarPjController {
    @Autowired
    private PersonajeService personajeService;

    @RequestMapping(value = "/nuevo-personaje", produces = { "application/json" }, method = RequestMethod.POST)
    public AjaxResponseObject postPersonaje(@RequestBody PersonajeCompletoDTO data) {
        personajeService.guardarPersonaje(data);
        return AjaxResponseGenerator.createSimpleResponseOK("OK");
    }
}
