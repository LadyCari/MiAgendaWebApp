package com.carito.agenda.Repositorys;

import com.carito.agenda.Entitys.DatosPrivadosCurso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DatosPrivadosCursoRepository extends JpaRepository<DatosPrivadosCurso, Long> {

    List<DatosPrivadosCurso> findByCursandoOrderByNombreAsc(boolean cursando);
}
