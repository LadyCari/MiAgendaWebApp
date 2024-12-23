package com.carito.agenda.Services.juegoRPG;

import com.carito.agenda.DTOs.juegoRPG.MascotaDTO;
import com.carito.agenda.Entitys.juegoRPG.Mascota;
import com.carito.agenda.Repositorys.juegoRPG.MascotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MascotaService {

    @Autowired
    private MascotaRepository mascotaRepository;

    public List<MascotaDTO> obtenerMascotasDTO(){

        List<Mascota> lista = mascotaRepository.findAllByActiva(true);

        List<MascotaDTO> listaDTO = new ArrayList<>();
        for (Mascota item: lista){
            MascotaDTO dto = new MascotaDTO();
            dto.setNombre(item.getNombre());
            dto.setImagen(item.getImagen());
            listaDTO.add(dto);
        }
        return listaDTO;
    }

    public Mascota guardarMascota(Mascota mascota){
        return mascotaRepository.save(mascota);
    }

    public void eliminarMascota(Long id) {
        mascotaRepository.delete(mascotaRepository.findById(id).get());
    }

}
