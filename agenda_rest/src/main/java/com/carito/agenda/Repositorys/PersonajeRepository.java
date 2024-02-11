package com.carito.agenda.Repositorys;

import com.carito.agenda.Entitys.InfoPj;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonajeRepository extends JpaRepository<InfoPj, Long> {
}
