package com.carito.agenda.Services;

import com.carito.agenda.Entitys.DetallesPj;
import com.carito.agenda.Repositorys.DetallesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DetallesService {
    @Autowired
    private DetallesRepository detallesRepository;

    public DetallesPj save(DetallesPj detallesPj){
        return detallesRepository.save(detallesPj);
    }
}
