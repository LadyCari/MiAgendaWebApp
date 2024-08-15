package com.carito.agenda.Services;

import com.carito.agenda.DTOs.DatosPrivadosCursoDTO;
import com.carito.agenda.Entitys.DatosPrivadosCurso;
import com.carito.agenda.Entitys.LinkImportanteCurso;
import com.carito.agenda.Repositorys.DatosPrivadosCursoRepository;
import com.carito.agenda.Repositorys.LinkImportanteCursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class DatosPrivadosCursoService {

    @Autowired
    private DatosPrivadosCursoRepository datosPrivadosCursoRepository;

    @Autowired
    private LinkImportanteCursoService linkImportanteCursoService;

    public List<DatosPrivadosCursoDTO> getDatosPrivadosCurso(boolean cursando) {
        List<DatosPrivadosCurso> lista = datosPrivadosCursoRepository.findByCursandoOrderByNombreAsc(cursando);
        List<DatosPrivadosCursoDTO> listaDTO = new ArrayList<>();
        for (DatosPrivadosCurso item: lista){
            DatosPrivadosCursoDTO dto = new DatosPrivadosCursoDTO();
            dto.setNombre(item.getNombre());
            dto.setDatosPrivadosCursoId(item.getDatosPrivadosCursoId());
            listaDTO.add(dto);
        }
        return listaDTO;
    }

    public DatosPrivadosCurso getCurso(Long id) {
        return datosPrivadosCursoRepository.findById(id).get();
    }

    @Transactional
    public void saveDatosPrivados(DatosPrivadosCurso datoPrivado) {
        DatosPrivadosCurso dato = datosPrivadosCursoRepository.save(datoPrivado);
        for(LinkImportanteCurso link : datoPrivado.getLinks()) {
            link.setDato(dato);
            linkImportanteCursoService.saveLinkImportanteCurso(link);
        }
    }

    public void deleteDatosPrivados(Long id) {
        datosPrivadosCursoRepository.delete(datosPrivadosCursoRepository.findById(id).get());
    }
}
