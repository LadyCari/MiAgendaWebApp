package com.carito.agenda.Repositorys;

import com.carito.agenda.Entitys.DetallesPj;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetallesRepository extends JpaRepository<DetallesPj, Long> {
}
