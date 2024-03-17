package com.carito.agenda.Services;

import com.carito.agenda.Entitys.DetallesPj;
import com.carito.agenda.Entitys.MisionesPj;
import com.carito.agenda.Repositorys.DetallesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DetallesService {
    @Autowired
    private DetallesRepository detallesRepository;

    public DetallesPj save(DetallesPj detallesPj){
        return detallesRepository.save(detallesPj);
    }

    public Optional<DetallesPj> findById(Long id) { return detallesRepository.findById(id);}

    public void delete(DetallesPj detallesPj) { detallesRepository.delete(detallesPj);}
}
