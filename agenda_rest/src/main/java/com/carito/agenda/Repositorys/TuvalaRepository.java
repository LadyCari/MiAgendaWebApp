package com.carito.agenda.Repositorys;

import com.carito.agenda.Entitys.TuvalaV;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TuvalaRepository extends JpaRepository<TuvalaV, Long> {
}
