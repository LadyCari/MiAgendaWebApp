package com.carito.agenda.Controllers.juegoRPG;


import com.carito.agenda.Entitys.juegoRPG.PersonajeRPG;
import com.carito.agenda.Excepcion.CustomException;
import com.carito.agenda.Services.juegoRPG.PersonajeRPGService;
import com.carito.agenda.web.AjaxResponseGenerator;
import com.carito.agenda.web.AjaxResponseObject;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Log4j2
@RestController
@RequestMapping("/personajeRPG")
public class PersonajeRPGController {

    @Autowired
    private PersonajeRPGService personajeRPGService;

    @RequestMapping(value = "/getPersonajeIzquierdaDTO", produces = { "application/json" }, method = RequestMethod.GET)
    public AjaxResponseObject obtenerPersonajeIzquierdaDTO() {
        return AjaxResponseGenerator.createSimpleResponseOK(personajeRPGService.obtenerPersonajeIzquierdaDTO());
    }

    @RequestMapping(value = "/crear", produces = { "application/json" }, method = RequestMethod.POST)
    public AjaxResponseObject crearPersonaje(@RequestBody PersonajeRPG personajeRPG) {
        try {
            return AjaxResponseGenerator.createSimpleResponseOK(personajeRPGService.crearPersonaje(personajeRPG));
        }
        catch (CustomException e) {
            return AjaxResponseGenerator.createSimpleResponseError("Ocurrio un error");
        }
    }
}
