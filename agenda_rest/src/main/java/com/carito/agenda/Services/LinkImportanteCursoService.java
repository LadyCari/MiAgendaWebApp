package com.carito.agenda.Services;

import com.carito.agenda.Entitys.DatosPrivadosCurso;
import com.carito.agenda.Entitys.LinkImportanteCurso;
import com.carito.agenda.Repositorys.LinkImportanteCursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class LinkImportanteCursoService {

    @Autowired
    private LinkImportanteCursoRepository linkImportanteCursoRepository;

    public List<LinkImportanteCurso> getLinkImportanteCurso() {
        return linkImportanteCursoRepository.findAll();
    }

    public void saveLinkImportanteCurso(LinkImportanteCurso linkImportanteCurso) {
        linkImportanteCursoRepository.save(linkImportanteCurso);
    }
    public void saveAll(List<LinkImportanteCurso> linkImportanteCurso) {
        linkImportanteCursoRepository.saveAll(linkImportanteCurso);
    }

    public void deleteLinkImportanteCurso(Long id) {
        linkImportanteCursoRepository.delete(linkImportanteCursoRepository.findById(id).get());
    }
}
