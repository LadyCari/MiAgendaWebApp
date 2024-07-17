package com.carito.agenda.Services;

import com.carito.agenda.DTOs.ItemsPaliaDTO;
import com.carito.agenda.DTOs.LinkDTO;
import com.carito.agenda.Entitys.ItemPalia;
import com.carito.agenda.Entitys.Link;
import com.carito.agenda.Repositorys.ItemPaliaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemPaliaService {

    @Autowired
    private ItemPaliaRepository itemPaliaRepository;

    public ItemPalia crearItem(ItemPalia nuevoItem) {
        return itemPaliaRepository.save(nuevoItem);
    }

    public  ItemsPaliaDTO getAllItemsPalia(Integer pagina, Integer cantidad) {
        Pageable pageable = PageRequest.of(pagina - 1, cantidad);
        Page<ItemPalia> pageItems = itemPaliaRepository.findAll(pageable);
        ItemsPaliaDTO item = new ItemsPaliaDTO();
        item.setItems(pageItems.getContent());
        item.setRegistros(itemPaliaRepository.countAll());
        return item;
    }

    public void modificarItemPalia(ItemPalia nuevoItem) {
        itemPaliaRepository.save(nuevoItem);
    }

    public void borrarItem(Long itemBorrar) {
        Optional<ItemPalia> itemOptional = itemPaliaRepository.findById(itemBorrar);
        itemOptional.ifPresent(item -> itemPaliaRepository.delete(item));
    }

}
