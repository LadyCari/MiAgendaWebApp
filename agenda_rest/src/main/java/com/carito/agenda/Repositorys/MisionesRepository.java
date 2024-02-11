package com.carito.agenda.Repositorys;

import com.carito.agenda.Entitys.MisionesPj;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MisionesRepository extends JpaRepository<MisionesPj, Long> {
}
