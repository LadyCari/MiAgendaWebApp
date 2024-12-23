package com.carito.agenda.Services.juegoRPG;

import com.carito.agenda.DTOs.juegoRPG.LifeSkillDerechaDTO;
import com.carito.agenda.Entitys.juegoRPG.LifeSkill;
import com.carito.agenda.Repositorys.juegoRPG.LifeSkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LifeSkillService {

    @Autowired
    private LifeSkillRepository lifeSkillRepository;

    public List<LifeSkill> obtenerLifeSkill (){
        return lifeSkillRepository.findAll();
    }

    public List<LifeSkillDerechaDTO> obtenerLifeSkillDerechaDTO (){

        List<LifeSkill> lista = lifeSkillRepository.findAll();

        List<LifeSkillDerechaDTO> listaDTO = new ArrayList<>();
        for (LifeSkill item: lista){
            LifeSkillDerechaDTO dto = new LifeSkillDerechaDTO();
            dto.setNombre(item.getNombre());
            dto.setImagen(item.getImagen());
            dto.setNivel(item.getNivel());
            dto.setExperienciaActual(item.getExperienciaActual());
            listaDTO.add(dto);
        }
        return listaDTO;
    }

    public LifeSkill guardarLifeSkill(LifeSkill lifeSkill){
        return lifeSkillRepository.save(lifeSkill);
    }

    public void eliminarLifeSkill(Long id) {
        lifeSkillRepository.delete(lifeSkillRepository.findById(id).get());
    }
}
