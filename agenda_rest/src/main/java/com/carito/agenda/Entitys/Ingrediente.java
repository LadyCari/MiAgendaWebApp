package com.carito.agenda.Entitys;
import com.carito.agenda.Enumerables.DiasSemanas;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="ingrediente")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Ingrediente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ingrediente_id")
    private Long ingredienteId;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "cantidad")
    private String cantidad;

    @Column(name = "unidad_medida")
    private String unidadMedida;

    @ManyToMany(mappedBy = "listaIngredientes")
    private List<RecetasCocina> recetas;
}
