package com.carito.agenda.Services;

import com.carito.agenda.Entitys.ActividadesSemanales;
import com.carito.agenda.Entitys.MisionesPj;
import com.carito.agenda.Repositorys.ActividadesSemanalesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActividadesSemanalesService {

    @Autowired
    private ActividadesSemanalesRepository actividadesSemanalesRepository;

    public List<ActividadesSemanales> obtenerActividadesSemanales (){
        return actividadesSemanalesRepository.findAllByActividadIdNotNullOrderByHorarioInicioAscHorarioFinAsc();
    }

    public ActividadesSemanales guardarActividadSemanal(ActividadesSemanales ActividadesSemanales){
        return actividadesSemanalesRepository.save(ActividadesSemanales);
    }

    public void eliminarActividadesSemanales(Long id) {
        actividadesSemanalesRepository.delete(actividadesSemanalesRepository.findById(id).get());
    }

}
