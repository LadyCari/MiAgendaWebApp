package com.carito.agenda.Services;

import com.carito.agenda.Entitys.TuvalaV;
import com.carito.agenda.Repositorys.TuvalaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TuvalaService {
    @Autowired
    private TuvalaRepository tuvalaRepository;

    public TuvalaV save(TuvalaV tuvalaV) {
        return tuvalaRepository.save(tuvalaV);
    }
}
