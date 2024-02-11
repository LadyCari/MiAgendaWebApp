package com.carito.agenda.Services;

import com.carito.agenda.Entitys.Clase;
import com.carito.agenda.Repositorys.ClaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClaseService {
    @Autowired
    private ClaseRepository claseRepository;

    public List<Clase> getClases() {
        return claseRepository.findAll();
    }
}
