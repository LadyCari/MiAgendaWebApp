package com.carito.agenda.Repositorys.juegoRPG;

import com.carito.agenda.Entitys.juegoRPG.LifeSkill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LifeSkillRepository extends JpaRepository <LifeSkill, Long> {
    List<LifeSkill> findAll();
}
