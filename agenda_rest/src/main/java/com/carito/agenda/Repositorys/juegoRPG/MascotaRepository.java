package com.carito.agenda.Repositorys.juegoRPG;

import com.carito.agenda.Entitys.juegoRPG.Mascota;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface MascotaRepository extends JpaRepository <Mascota, Long> {


    List<Mascota> findAllByActiva(Boolean Activo);

    List<Mascota> findAll();


}
