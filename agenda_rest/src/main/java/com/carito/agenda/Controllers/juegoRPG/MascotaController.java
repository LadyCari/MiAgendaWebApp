package com.carito.agenda.Controllers.juegoRPG;

import com.carito.agenda.Entitys.juegoRPG.Mascota;
import com.carito.agenda.Excepcion.CustomException;
import com.carito.agenda.Services.juegoRPG.MascotaService;
import com.carito.agenda.web.AjaxResponseGenerator;
import com.carito.agenda.web.AjaxResponseObject;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Log4j2
@RestController
@RequestMapping("/mascota")
public class MascotaController {

    @Autowired
    private MascotaService mascotaService;

    @RequestMapping(value = "/getMascotaDTO", produces = { "application/json" }, method = RequestMethod.GET)
    public AjaxResponseObject getMascotas() {
        return AjaxResponseGenerator.createSimpleResponseOK(mascotaService.obtenerMascotasDTO());
    }

    @RequestMapping(value = "/crear", produces = { "application/json" }, method = RequestMethod.POST)
    public AjaxResponseObject guardarMascota(@RequestBody Mascota mascota) {
        try {
            return AjaxResponseGenerator.createSimpleResponseOK(mascotaService.guardarMascota(mascota));
        }
        catch (CustomException e) {
            return AjaxResponseGenerator.createSimpleResponseError("Ocurrio un error");
        }
    }

    @RequestMapping(value = "/delete", produces = { "application/json" }, method = RequestMethod.DELETE)
    public AjaxResponseObject eliminarMascota (@RequestParam("id") Long id) {
        try {
            mascotaService.eliminarMascota(id);
            return AjaxResponseGenerator.createSimpleResponseOK("mascota eliminada correctamente");
        }
        catch (CustomException e) {
            return AjaxResponseGenerator.createSimpleResponseError("Ocurrio un error");
        }
    }
}
