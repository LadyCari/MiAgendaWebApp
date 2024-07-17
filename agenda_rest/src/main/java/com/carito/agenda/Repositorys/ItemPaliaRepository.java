package com.carito.agenda.Repositorys;

import com.carito.agenda.Entitys.ItemPalia;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemPaliaRepository extends JpaRepository<ItemPalia, Long> {

    Page<ItemPalia> findAll (Pageable pageable);


    @Query(value = "SELECT COUNT (*) FROM ItemPalia")
    Integer countAll();
}
