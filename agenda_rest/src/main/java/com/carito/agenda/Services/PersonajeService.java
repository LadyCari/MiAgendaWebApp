package com.carito.agenda.Services;

import com.carito.agenda.DTOs.PersonajeConFotoDTO;
import com.carito.agenda.Repositorys.PersonajeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import javax.persistence.Query;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;

@Service
public class PersonajeService {
    @Autowired
    private PersonajeRepository personajeRepository;

    private final EntityManager entityManager;

    public PersonajeService(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public List<PersonajeConFotoDTO> getPersonajesConFoto(){
        List<PersonajeConFotoDTO> personajeList = new ArrayList<>();
        String nativeQuery = "select ip.id_pj, ip.nombre_pj, ip.foto_pj , cp.nombre_clase " +
                "from info_pj ip " +
                "join clase_pj cp on cp.id_clase = ip.id_clase;";
        Query query = entityManager.createNativeQuery(nativeQuery);

        @SuppressWarnings("unchecked")
        List<Object[]> auxObject = query.getResultList();

        for (Object[] result : auxObject) {
            PersonajeConFotoDTO pj = new PersonajeConFotoDTO();
            pj.setIdPersonaje(Long.valueOf(result[0].toString()));
            pj.setNombre(result[1].toString());
            pj.setFoto((result[2] == null) ? new byte[0] : (result[2].toString().getBytes()));
            pj.setClase(result[3].toString());
            personajeList.add(pj);
        }
        return personajeList;
    }
}
