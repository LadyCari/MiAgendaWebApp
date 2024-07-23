package com.carito.agenda.Repositorys;

import com.carito.agenda.Entitys.ActividadesSemanales;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActividadesSemanalesRepository extends JpaRepository <ActividadesSemanales, Long>{

    List<ActividadesSemanales> findAllByActividadIdNotNullOrderByHorarioInicioAscHorarioFinAsc();
}
