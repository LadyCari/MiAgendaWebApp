package com.carito.agenda.Services;

import com.carito.agenda.Entitys.TuvalaV;
import com.carito.agenda.Repositorys.TuvalaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TuvalaService {
    @Autowired
    private TuvalaRepository tuvalaRepository;

    public TuvalaV save(TuvalaV tuvalaV) {
        return tuvalaRepository.save(tuvalaV);
    }

    public Optional<TuvalaV> findById(Long id) { return tuvalaRepository.findById(id);}

    public void delete(TuvalaV tuvalaV) { tuvalaRepository.delete(tuvalaV);}
}
