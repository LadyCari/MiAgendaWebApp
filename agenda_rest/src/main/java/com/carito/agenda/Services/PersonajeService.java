package com.carito.agenda.Services;

import com.carito.agenda.DTOs.PersonajeCompletoDTO;
import com.carito.agenda.DTOs.PersonajeConFotoDTO;
import com.carito.agenda.Entitys.DetallesPj;
import com.carito.agenda.Entitys.InfoPj;
import com.carito.agenda.Entitys.MisionesPj;
import com.carito.agenda.Entitys.TuvalaV;
import com.carito.agenda.Repositorys.PersonajeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import javax.persistence.Query;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;
import java.util.Base64;
import java.nio.charset.StandardCharsets;

@Service
public class PersonajeService {
    @Autowired
    private PersonajeRepository personajeRepository;

    @Autowired
    private DetallesService detallesService;

    @Autowired
    private MisionesService misionesService;

    @Autowired
    private TuvalaService tuvalaService;

    private final EntityManager entityManager;

    public PersonajeService(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public List<PersonajeConFotoDTO> getPersonajesConFoto(){
        List<PersonajeConFotoDTO> personajeList = new ArrayList<>();
        String nativeQuery = "select ip.id_pj, ip.nombre_pj, ip.foto_pj , cp.nombre_clase " +
                "from info_pj ip " +
                "join clase_pj cp on cp.id_clase = ip.id_clase;";
        Query query = entityManager.createNativeQuery(nativeQuery);

        @SuppressWarnings("unchecked")
        List<Object[]> auxObject = query.getResultList();

        for (Object[] result : auxObject) {
            PersonajeConFotoDTO pj = new PersonajeConFotoDTO();
            pj.setIdPersonaje(Long.valueOf(result[0].toString()));
            pj.setNombre(result[1].toString());
            pj.setFoto((result[2] == null) ? new byte[0] : (byte[]) result[2]);
            pj.setClase(result[3].toString());
            personajeList.add(pj);
        }
        return personajeList;
    }

    @Transactional
    public void guardarPersonaje(PersonajeCompletoDTO personaje) {
        /// GUARDAR DETALLES
        DetallesPj detallesPj = new DetallesPj();
        detallesPj.setObjetivo(personaje.getObjetivo());
        detallesPj.setTemporada(personaje.isTemporada());
        detallesPj = detallesService.save(detallesPj);
        /// GUARDAR MISIONES
        MisionesPj misionesPj = new MisionesPj();
        misionesPj.setChenga(personaje.isChenga());
        misionesPj.setInventario(personaje.isInventario());
        misionesPj = misionesService.save(misionesPj);
        /// GUARDAR TUVALA
        TuvalaV tuvalaV = new TuvalaV();
        tuvalaV.setAnillo1(personaje.isAnillo1());
        tuvalaV.setAnillo2(personaje.isAnillo2());
        tuvalaV.setArete1(personaje.isArete1());
        tuvalaV.setArete2(personaje.isArete2());
        tuvalaV.setCasco(personaje.isCasco());
        tuvalaV.setCollar(personaje.isCollar());
        tuvalaV.setCinturon(personaje.isCinturon());
        tuvalaV.setGuante(personaje.isGuante());
        tuvalaV.setZapato(personaje.isZapato());
        tuvalaV.setPechera(personaje.isPechera());
        tuvalaV.setArmaDespertar(personaje.isArmaDespertar());
        tuvalaV.setArmaSecundaria(personaje.isArmaSecundaria());
        tuvalaV.setArmaPrincipal(personaje.isArmaPrincipal());
        tuvalaV = tuvalaService.save(tuvalaV);
        /// GUARDAR PJ
        InfoPj nuevoPersonaje = new InfoPj();
        nuevoPersonaje.setNombre(personaje.getNombre());
        nuevoPersonaje.setFoto(personaje.getFoto().getBytes());
        nuevoPersonaje.setSet(personaje.getFotoSet().getBytes());
        nuevoPersonaje.setIdClase(personaje.getIdClase());
        nuevoPersonaje.setIdDetalles(detallesPj.getDetallesId());
        nuevoPersonaje.setIdMisiones(misionesPj.getMisionesId());
        nuevoPersonaje.setIdInventarioTuvala(tuvalaV.getInventarioId());
        personajeRepository.save(nuevoPersonaje);
    }
}
