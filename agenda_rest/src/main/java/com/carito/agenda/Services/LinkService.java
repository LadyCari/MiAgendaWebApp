package com.carito.agenda.Services;

import com.carito.agenda.DTOs.LinkDTO;
import com.carito.agenda.Entitys.Link;
import com.carito.agenda.Repositorys.LinkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LinkService {

    @Autowired
    private LinkRepository linkRepository;

    public Link crearLinkUtil(Link nuevoLink) {
        return linkRepository.save(nuevoLink);
    }

    public LinkDTO getLinksByCategoria(String categoria, Integer pagina, Integer cantidad, String buscar) {
        Pageable pageable = PageRequest.of(pagina - 1, cantidad);
        List<Link> links = linkRepository.findAllByCategoriaAndNombreIsContainingIgnoreCaseOrderByFavoritoDesc(categoria,buscar, pageable);
        return new LinkDTO(links, linkRepository.countAllByCategoriaAndNombreIsContainingIgnoreCase(categoria, buscar));
    }

    public void modificarLinkUtil(Link nuevoLink) {
        linkRepository.save(nuevoLink);
    }

    public void borrarLinkUtil(Long linkABorrar) {
        Optional<Link> linkOptional = linkRepository.findById(linkABorrar);
        linkOptional.ifPresent(link -> linkRepository.delete(link));
    }
}
