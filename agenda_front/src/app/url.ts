export class Url {
  public static urlItems: any = "http://localhost:3000/items"
  public static urlConstantes: any = "http://localhost:3000/Constantes"
  /*BDO*/
  public static getPersonajesVistaPrevia = "http://localhost:8089/get-personajes-foto"
  public static getClasesPjs = "http://localhost:8089/get-clases"
  public static postNuevoPj = "http://localhost:8089/personaje/nuevo-personaje"
  public static getInfoPersonaje = "http://localhost:8089/personaje/personaje-completo/?id="
  public static editarPj = "http://localhost:8089/personaje/modificar-personaje"
  public static eliminarPj = "http://localhost:8089/personaje/delete-personaje?personajeId="
  /*Pendientes*/
  public static getPendiente = "http://localhost:8089/tareas/get-tareas"
  public static PostPendiente = "http://localhost:8089/tareas/crear"
  public static deletePendiente = "http://localhost:8089/tareas/delete?id="
  /*links*/
  public static getLinks = "http://localhost:8089/link-utiles/get-links?categoria="
  public static editLinks = "http://localhost:8089/link-utiles/modificar-link"
  public static addLinks = "http://localhost:8089/link-utiles/add-link"
  public static deleteLinks = "http://localhost:8089/link-utiles/delete-link?linkId="
  /*actividades semanales*/
  public static getActividad = "http://localhost:8089/actividades-semanales/get"
  public static addActividad = "http://localhost:8089/actividades-semanales/crear"
  public static deleteActividad = "http://localhost:8089/actividades-semanales/delete?id="
  /*palia*/
  public static getAllItems = "http://localhost:8089/palia/get-items"
  public static addItem = "http://localhost:8089/palia/add-item"
  public static modificarItem = "http://localhost:8089/palia/modificar-item"
  public static borrarItem = "http://localhost:8089/palia/delete-item"
  /*calendario*/
  public static getEventoCalendario = "http://localhost:8089/evento-calentario/get-eventos"
  public static postEventoCalendario = "http://localhost:8089/evento-calentario/crear"
  public static deleteEventoCalendario = "http://localhost:8089/evento-calentario/delete?id="
  /*curso*/
  public static getDatosCurso = "http://localhost:8089/datos-privados-curso/get-datos"
  public static getCurso = "http://localhost:8089/datos-privados-curso/get-dato"
  public static postDatosCurso = "http://localhost:8089/datos-privados-curso/crear-datos"
  public static deleteDatosCurso = "http://localhost:8089/datos-privados-curso/delete-datos?id="
  /*juego*/
  /*derecha*/
  public static getLifeDerechaDTO = "http://localhost:8089/life-skill/getLifeSkillDerechaDTO"
  public static getMascotaActivaDTO = "http://localhost:8089/mascota/getMascotaDTO"
  /*adm*/
  public static crearLife = "http://localhost:8089/life-skill/crear"
  public static eliminarLife = "http://localhost:8089/life-skill/delete"
  /*izquierda*/
  public static getpjIzquierdaDTO = "http://localhost:8089/personajeRPG/getPersonajeIzquierdaDTO"
  /*pet*/
  public static crearPet = "http://localhost:8089/mascota/crear"
}