package com.carito.agenda.Repositorys;

import com.carito.agenda.Entitys.DatosPrivadosCurso;
import com.carito.agenda.Entitys.LinkImportanteCurso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LinkImportanteCursoRepository extends JpaRepository<LinkImportanteCurso, Long> {
}
