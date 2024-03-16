package com.carito.agenda.Controllers;

import com.carito.agenda.Entitys.Link;
import com.carito.agenda.Excepcion.CustomException;
import com.carito.agenda.Services.LinkService;
import com.carito.agenda.web.AjaxResponseGenerator;
import com.carito.agenda.web.AjaxResponseObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/link-utiles")
public class LinksController {

    @Autowired
    private LinkService linkService;

    @RequestMapping(value = "/add-link", produces = { "application/json" }, method = RequestMethod.POST)
    public AjaxResponseObject postLinkUtil(@RequestBody Link data) {
        Link link = linkService.crearLinkUtil(data);
        return AjaxResponseGenerator.createSimpleResponseOK(link);
    }

    @RequestMapping(value = "/get-links", produces = { "application/json" }, method = RequestMethod.GET)
    public AjaxResponseObject getLinksUtils(@RequestParam("categoria") String categoria) {
        List<Link> linkList = linkService.getLinksByCategoria(categoria);
        return AjaxResponseGenerator.createSimpleResponseOK(linkList);
    }

    @RequestMapping(value = "/modificar-link", produces = { "application/json" }, method = RequestMethod.PUT)
    public AjaxResponseObject putLinkUtil(@RequestBody Link data) {
        linkService.modificarLinkUtil(data);
        return AjaxResponseGenerator.createSimpleResponseOK("OK");
    }

    @RequestMapping(value = "/delete-link", produces = { "application/json" }, method = RequestMethod.DELETE)
    public AjaxResponseObject deleteLinkUtil(@RequestParam("linkId") Long id) {
        try {
            linkService.borrarLinkUtil(id);
            return AjaxResponseGenerator.createSimpleResponseOK("Tarea eliminada correctamente");
        }
        catch (CustomException e) {
            return AjaxResponseGenerator.createSimpleResponseError("Ocurrio un error");
        }
    }
}
