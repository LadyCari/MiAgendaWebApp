package com.carito.agenda.Repositorys;

import com.carito.agenda.Entitys.Link;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LinkRepository extends JpaRepository<Link, Long> {

    List<Link> findAllByCategoriaOrderByFavoritoDesc(String categoria, Pageable pageable);

    Integer countAllByCategoria(String categoria);
}
