package com.carito.agenda.Repositorys;

import com.carito.agenda.Entitys.ActividadesSemanales;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActividadesSemanalesRepository extends JpaRepository <ActividadesSemanales, Long>{


}
