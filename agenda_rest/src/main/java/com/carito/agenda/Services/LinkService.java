package com.carito.agenda.Services;

import com.carito.agenda.Entitys.Link;
import com.carito.agenda.Repositorys.LinkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LinkService {

    @Autowired
    private LinkRepository linkRepository;

    public Link crearLinkUtil(Link nuevoLink) {
        return linkRepository.save(nuevoLink);
    }

    public List<Link> getLinksByCategoria(String categoria) {
        return linkRepository.findAllByCategoria(categoria);
    }

    public void modificarLinkUtil(Link nuevoLink) {
        linkRepository.save(nuevoLink);
    }
}