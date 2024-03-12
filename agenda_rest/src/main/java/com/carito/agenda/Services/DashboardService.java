package com.carito.agenda.Services;

import com.carito.agenda.Entitys.Pendientes;
import com.carito.agenda.Repositorys.PendientesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DashboardService {
    @Autowired
    private PendientesRepository pendientesRepository;

    public List<Pendientes> getTareasPendientes() {
        return pendientesRepository.findAll();
    }

    public Pendientes saveTareas(Pendientes pendiente) {
        return pendientesRepository.save(pendiente);
    }

    public void deleteTareas(Long id) {
        pendientesRepository.delete(pendientesRepository.findById(id).get());
    }
}
