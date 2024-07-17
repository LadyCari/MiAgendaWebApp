package com.carito.agenda.Controllers;

import com.carito.agenda.DTOs.ItemsPaliaDTO;
import com.carito.agenda.DTOs.LinkDTO;
import com.carito.agenda.Entitys.ItemPalia;
import com.carito.agenda.Entitys.Link;
import com.carito.agenda.Excepcion.CustomException;
import com.carito.agenda.Services.ItemPaliaService;
import com.carito.agenda.web.AjaxResponseGenerator;
import com.carito.agenda.web.AjaxResponseObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/palia")
public class ItemsPaliaController {

    @Autowired
    private ItemPaliaService itemPaliaService;

    @RequestMapping(value = "/add-item", produces = { "application/json" }, method = RequestMethod.POST)
    public AjaxResponseObject postItem(@RequestBody ItemPalia data) {
        ItemPalia item = itemPaliaService.crearItem(data);
        return AjaxResponseGenerator.createSimpleResponseOK(item);
    }

    @RequestMapping(value = "/get-items", produces = { "application/json" }, method = RequestMethod.GET)
    public AjaxResponseObject getAllItems(@RequestParam("pagina") Integer pagina,
                                          @RequestParam("cantidad") Integer cantidad) {
        ItemsPaliaDTO listaItems = itemPaliaService.getAllItemsPalia(pagina, cantidad);
        return AjaxResponseGenerator.createSimpleResponseOK(listaItems);
    }

    @RequestMapping(value = "/modificar-item", produces = { "application/json" }, method = RequestMethod.PUT)
    public AjaxResponseObject putItem(@RequestBody ItemPalia item) {
        itemPaliaService.modificarItemPalia(item);
        return AjaxResponseGenerator.createSimpleResponseOK("OK");
    }

    @RequestMapping(value = "/delete-item", produces = { "application/json" }, method = RequestMethod.DELETE)
    public AjaxResponseObject deleteItem(@RequestParam("itemId") Long id) {
        try {
            itemPaliaService.borrarItem(id);
            return AjaxResponseGenerator.createSimpleResponseOK("Tarea eliminada correctamente");
        }
        catch (CustomException e) {
            return AjaxResponseGenerator.createSimpleResponseError("Ocurrio un error");
        }
    }

}
