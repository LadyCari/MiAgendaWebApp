package com.carito.agenda.Repositorys;

import com.carito.agenda.Entitys.Pendientes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PendientesRepository extends JpaRepository<Pendientes, Long> {
}
