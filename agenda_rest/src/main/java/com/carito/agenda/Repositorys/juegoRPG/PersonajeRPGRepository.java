package com.carito.agenda.Repositorys.juegoRPG;

import com.carito.agenda.Entitys.juegoRPG.PersonajeRPG;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonajeRPGRepository extends JpaRepository <PersonajeRPG, Long> {
}
