package com.carito.agenda.Controllers;

import com.carito.agenda.Entitys.Clase;
import com.carito.agenda.Services.ClaseService;
import com.carito.agenda.web.AjaxResponseGenerator;
import com.carito.agenda.web.AjaxResponseObject;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@Log4j2
@RestController
public class ClasesController {
    @Autowired
    private ClaseService claseService;

    @RequestMapping(value = "/get-clases", produces = { "application/json" }, method = RequestMethod.GET)
    public AjaxResponseObject getClases() {
        List<Clase> clases = claseService.getClases();
        return AjaxResponseGenerator.createSimpleResponseOK(clases);
    }
}
