package com.carito.agenda.Entitys;
import com.carito.agenda.Enumerables.DiasSemanas;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="recetas")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RecetasCocina {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "receta_id")
    private Long recetaId;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "youtube")
    private String linkYouTube;

    @ManyToMany
    @JoinTable(
            name = "ingredientes_recetas",
            joinColumns = @JoinColumn(name = "receta_id"),
            inverseJoinColumns = @JoinColumn(name = "ingrediente_id")
    )
    private List<Ingrediente> listaIngredientes;
}
