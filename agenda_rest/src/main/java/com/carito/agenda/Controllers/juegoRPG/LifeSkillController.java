package com.carito.agenda.Controllers.juegoRPG;

import com.carito.agenda.Entitys.ActividadesSemanales;
import com.carito.agenda.Entitys.juegoRPG.LifeSkill;
import com.carito.agenda.Excepcion.CustomException;
import com.carito.agenda.Services.juegoRPG.LifeSkillService;
import com.carito.agenda.web.AjaxResponseGenerator;
import com.carito.agenda.web.AjaxResponseObject;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Log4j2
@RestController
@RequestMapping("/life-skill")
public class LifeSkillController {

    @Autowired
    private LifeSkillService lifeSkillService;

    @RequestMapping(value = "/get", produces = { "application/json" }, method = RequestMethod.GET)
    public AjaxResponseObject getLifeSkill() {
        return AjaxResponseGenerator.createSimpleResponseOK(lifeSkillService.obtenerLifeSkill());
    }

    @RequestMapping(value = "/getLifeSkillDerechaDTO", produces = { "application/json" }, method = RequestMethod.GET)
    public AjaxResponseObject getLifeSkillDerechaDTO() {
        return AjaxResponseGenerator.createSimpleResponseOK(lifeSkillService.obtenerLifeSkillDerechaDTO());
    }

    @RequestMapping(value = "/crear", produces = { "application/json" }, method = RequestMethod.POST)
    public AjaxResponseObject guardarLifeSkill(@RequestBody LifeSkill lifeSkill) {
        try {
            return AjaxResponseGenerator.createSimpleResponseOK(lifeSkillService.guardarLifeSkill(lifeSkill));
        }
        catch (CustomException e) {
            return AjaxResponseGenerator.createSimpleResponseError("Ocurrio un error");
        }
    }

    @RequestMapping(value = "/delete", produces = { "application/json" }, method = RequestMethod.DELETE)
    public AjaxResponseObject eliminarLifeSkill (@RequestParam("id") Long id) {
        try {
            lifeSkillService.eliminarLifeSkill(id);
            return AjaxResponseGenerator.createSimpleResponseOK("life eliminada correctamente");
        }
        catch (CustomException e) {
            return AjaxResponseGenerator.createSimpleResponseError("Ocurrio un error");
        }
    }

}
