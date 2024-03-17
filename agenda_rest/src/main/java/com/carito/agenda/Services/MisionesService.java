package com.carito.agenda.Services;

import com.carito.agenda.Entitys.MisionesPj;
import com.carito.agenda.Repositorys.MisionesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MisionesService {
    @Autowired
    private MisionesRepository misionesRepository;

    public MisionesPj save(MisionesPj misionesPj){
        return misionesRepository.save(misionesPj);
    }

    public Optional<MisionesPj> findById(Long id) { return misionesRepository.findById(id);}

    public void delete(MisionesPj misionesPj) { misionesRepository.delete(misionesPj);}
}
