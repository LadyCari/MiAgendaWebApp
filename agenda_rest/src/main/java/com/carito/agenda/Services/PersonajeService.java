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
import java.util.Base64;
import java.util.List;
import java.util.Optional;

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

    public PersonajeCompletoDTO getPersonajeById(Long id){
        String nativeQuery = "select ip.nombre_pj, cp.nombre_clase, dp.temporada, dp.objetivo, mp.chenga, mp.inventario, tv.casco, tv.guante, tv.zapato, tv.pechera, tv.anillo1, tv.anillo2, tv.arete1, tv.arete2, tv.collar, tv.cinturon, tv.arma_principal, tv.arma_secundaria, tv.arma_despertar, ip.foto_pj, ip.set_pj, ip.id_clase " +
                "from info_pj ip " +
                "join clase_pj cp on cp.id_clase = ip.id_clase " +
                "join detalles_pj dp on dp.id_detalles_pj = ip.id_detalles_pj " +
                "join misiones_pj mp on mp.id_misiones_pj = ip.id_misiones_pj " +
                "join tuvala_v tv on tv.id_inventario_tuvala = ip.id_inventario_tuvala " +
                "where ip.id_pj = :id";
        Query query = entityManager.createNativeQuery(nativeQuery);
        query.setParameter("id", id);

        @SuppressWarnings("unchecked")
        List<Object[]> auxObject = query.getResultList();

        PersonajeCompletoDTO personaje = new PersonajeCompletoDTO();
        if (!auxObject.isEmpty()) {
            Object[] result = auxObject.get(0);
            personaje.setNombre(result[0].toString());
            personaje.setClase(result[1].toString());
            personaje.setTemporada((Boolean) result[2]);
            personaje.setObjetivo(result[3].toString());
            personaje.setChenga((Boolean) result[4]);
            personaje.setInventario((Boolean) result[5]);
            personaje.setCasco((Boolean) result[6]);
            personaje.setGuante((Boolean) result[7]);
            personaje.setZapato((Boolean) result[8]);
            personaje.setPechera((Boolean) result[9]);
            personaje.setAnillo1((Boolean) result[10]);
            personaje.setAnillo2((Boolean) result[11]);
            personaje.setArete1((Boolean) result[12]);
            personaje.setArete2((Boolean) result[13]);
            personaje.setCollar((Boolean) result[14]);
            personaje.setCinturon((Boolean) result[15]);
            personaje.setArmaPrincipal((Boolean) result[16]);
            personaje.setArmaSecundaria((Boolean) result[17]);
            personaje.setArmaDespertar((Boolean) result[18]);
            personaje.setIdPersonaje(id);
            personaje.setFoto((byte[]) result[19]);
            personaje.setFotoSet((byte[]) result[20]);
            personaje.setIdClase(Long.valueOf(result[21].toString()));
        }
        return personaje;
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
        nuevoPersonaje.setFoto(personaje.getFoto());
        nuevoPersonaje.setSet(personaje.getFotoSet());
        nuevoPersonaje.setIdClase(personaje.getIdClase());
        nuevoPersonaje.setIdDetalles(detallesPj.getDetallesId());
        nuevoPersonaje.setIdMisiones(misionesPj.getMisionesId());
        nuevoPersonaje.setIdInventarioTuvala(tuvalaV.getInventarioId());
        personajeRepository.save(nuevoPersonaje);
    }

    @Transactional
    public void modificarPersonaje(PersonajeCompletoDTO personaje) {
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
        nuevoPersonaje.setIdPj(personaje.getIdPersonaje());
        nuevoPersonaje.setNombre(personaje.getNombre());
        nuevoPersonaje.setFoto(personaje.getFoto());
        nuevoPersonaje.setSet(personaje.getFotoSet());
        nuevoPersonaje.setIdClase(personaje.getIdClase());
        nuevoPersonaje.setIdDetalles(detallesPj.getDetallesId());
        nuevoPersonaje.setIdMisiones(misionesPj.getMisionesId());
        nuevoPersonaje.setIdInventarioTuvala(tuvalaV.getInventarioId());
        personajeRepository.save(nuevoPersonaje);
    }

    @Transactional
    public void deletePersonaje(Long pjId) {
        Optional<InfoPj> pjOptional = personajeRepository.findById(pjId);
        if(pjOptional.isPresent()){
            personajeRepository.delete(pjOptional.get());

            Optional<TuvalaV> tuvalaVOptional = tuvalaService.findById(pjOptional.get().getIdInventarioTuvala());
            tuvalaVOptional.ifPresent(tuvalaV -> tuvalaService.delete(tuvalaV));

            Optional<MisionesPj> misionesPjOptional = misionesService.findById(pjOptional.get().getIdMisiones());
            misionesPjOptional.ifPresent(misionesPj -> misionesService.delete(misionesPj));

            Optional<DetallesPj> detallesPjOptional = detallesService.findById(pjOptional.get().getIdDetalles());
            detallesPjOptional.ifPresent(detallesPj -> detallesService.delete(detallesPj));
        }
    }
}
