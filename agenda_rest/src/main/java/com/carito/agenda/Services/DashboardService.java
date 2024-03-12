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

    public void saveTareas(Pendientes pendiente) {
        pendientesRepository.save(pendiente);
    }

    public void deleteTareas(Pendientes pendiente) {
        pendientesRepository.delete(pendiente);
    }
}
