package com.carito.agenda.Services.juegoRPG;

import com.carito.agenda.DTOs.juegoRPG.PersonajeIzquierdaDTO;
import com.carito.agenda.Entitys.juegoRPG.PersonajeRPG;
import com.carito.agenda.Repositorys.juegoRPG.PersonajeRPGRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonajeRPGService {

    @Autowired
    private PersonajeRPGRepository personajeRPGRepository;

    public PersonajeIzquierdaDTO obtenerPersonajeIzquierdaDTO(){

        List<PersonajeRPG> listaPersonaje = personajeRPGRepository.findAll();

        PersonajeRPG personaje = listaPersonaje.get(0);

        PersonajeIzquierdaDTO dto = new PersonajeIzquierdaDTO();

        dto.setNombre(personaje.getNombre());
        dto.setImagen(personaje.getImagen());

        return dto;
    }

    public PersonajeRPG crearPersonaje(PersonajeRPG personajeRPG){
        return personajeRPGRepository.save(personajeRPG);
    }

}
