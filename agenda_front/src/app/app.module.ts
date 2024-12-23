import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialComponent } from './Shared/social/social.component';
import { NavBarComponent } from './Shared/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { HomePaliaComponent } from './Paginas/Juegos/Palia/home-palia/home-palia.component';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoadingComponent } from './Paginas/loading/loading.component';
import { HomeBdoComponent } from './Paginas/Juegos/BlackDessert/home-bdo/home-bdo.component';
import { ModalCargarPjComponent } from './Modales/modal-cargar-pj/modal-cargar-pj.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { VistaPersonajeBdoComponent } from './Paginas/Juegos/BlackDessert/vista-personaje-bdo/vista-personaje-bdo.component';
import { HomeJuegosComponent } from './Paginas/Juegos/home-juegos/home-juegos.component';
import { HomeLinksUtilesComponent } from './Paginas/Links-utiles/home-links-utiles/home-links-utiles.component';
import { HomeComponent } from './Paginas/home/home.component';
import { ModalLinkComponent } from './Modales/modal-link/modal-link.component';
import { MatMenuModule } from '@angular/material/menu';
import { LinksUtilesGeneralComponent } from './Paginas/Links-utiles/links-utiles-general/links-utiles-general.component';
import { HomeEstudiosComponent } from './Paginas/Estudios/home-estudios/home-estudios.component';
import { AgregarEventoCalendarioComponent } from './Modales/agregar-evento-calendario/agregar-evento-calendario.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { JsonPipe } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { AgregarRutinaSemanalComponent } from './Modales/agregar-rutina-semanal/agregar-rutina-semanal.component';
import { OtroHomeComponent } from './Paginas/otro/otro-home/otro-home.component';
import { OtroRecetasComponent } from './Paginas/otro/otro-recetas/otro-recetas.component';
import { MapaMundoComponent } from './Paginas/Juegos/Juego-rpg/mapa-mundo/mapa-mundo.component';
import { MapaLagoComponent } from './Paginas/Juegos/Juego-rpg/mapas-dentro-juego/mapa-lago/mapa-lago.component';
import { MapaBosqueComponent } from './Paginas/Juegos/Juego-rpg/mapas-dentro-juego/mapa-bosque/mapa-bosque.component';
import { MapaMinaComponent } from './Paginas/Juegos/Juego-rpg/mapas-dentro-juego/mapa-mina/mapa-mina.component';
import { MapaCasaComponent } from './Paginas/Juegos/Juego-rpg/mapas-dentro-juego/mapa-pueblo/mapa-casa/mapa-casa.component';
import { MapaPuebloComponent } from './Paginas/Juegos/Juego-rpg/mapas-dentro-juego/mapa-pueblo/mapa-pueblo/mapa-pueblo.component';
import { MapaPatioComponent } from './Paginas/Juegos/Juego-rpg/mapas-dentro-juego/mapa-pueblo/mapa-patio/mapa-patio.component';
import { ModalLifeRecoleccionComponent } from './Paginas/Juegos/Juego-rpg/modales/modal-life-recoleccion/modal-life-recoleccion.component';
import { HomeJuegoRpgComponent } from './Paginas/Juegos/Juego-rpg/home-juego-rpg/home-juego-rpg.component';
import { HomeParteIzquierdaComponent } from './Paginas/Juegos/Juego-rpg/shared/home-parte-izquierda/home-parte-izquierda.component';
import { HomeParteDerechaComponent } from './Paginas/Juegos/Juego-rpg/shared/home-parte-derecha/home-parte-derecha.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InventarioComponent } from './Paginas/Juegos/Juego-rpg/modales/General/inventario/inventario.component';
import { AgregarCursoComponent } from './Modales/agregar-curso/agregar-curso.component';
import { MuestraCursoComponent } from './Paginas/Estudios/muestra-curso/muestra-curso.component';
import { OtroPersonajesComponent } from './Paginas/otro/otro-personajes/otro-personajes.component';
import { PanelAdmComponent } from './Paginas/Juegos/Juego-rpg/modales/panel-adm/panel-adm.component';
import { DetallesPjComponent } from './Paginas/Juegos/Juego-rpg/modales/General/detalles-pj/detalles-pj.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialComponent,
    NavBarComponent,
    HomePaliaComponent,
    LoadingComponent,
    HomeBdoComponent,
    ModalCargarPjComponent,
    VistaPersonajeBdoComponent,
    HomeJuegosComponent,
    HomeLinksUtilesComponent,
    HomeComponent,
    ModalLinkComponent,
    LinksUtilesGeneralComponent,
    HomeEstudiosComponent,
    AgregarEventoCalendarioComponent,
    AgregarRutinaSemanalComponent,
    OtroHomeComponent,
    OtroRecetasComponent,
    MapaMundoComponent,
    MapaLagoComponent,
    MapaBosqueComponent,
    MapaMinaComponent,
    MapaCasaComponent,
    MapaPuebloComponent,
    MapaPatioComponent,
    ModalLifeRecoleccionComponent,
    HomeJuegoRpgComponent,
    HomeParteIzquierdaComponent,
    HomeParteDerechaComponent,
    InventarioComponent,
    AgregarCursoComponent,
    MuestraCursoComponent,
    OtroPersonajesComponent,
    PanelAdmComponent,
    DetallesPjComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatDatepickerModule,
    JsonPipe,
    MatNativeDateModule,
    MatProgressBarModule
  ],
  exports: [
    MatPaginatorModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
