import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePaliaComponent } from './Paginas/Juegos/Palia/home-palia/home-palia.component';
import { HomeBdoComponent } from './Paginas/Juegos/BlackDessert/home-bdo/home-bdo.component';
import { HomeJuegosComponent } from './Paginas/Juegos/home-juegos/home-juegos.component';
import { VistaPersonajeBdoComponent } from './Paginas/Juegos/BlackDessert/vista-personaje-bdo/vista-personaje-bdo.component';
import { HomeComponent } from './Paginas/home/home.component';
import { HomeEstudiosComponent } from './Paginas/Estudios/home-estudios/home-estudios.component';
import { HomeLinksUtilesComponent } from './Paginas/Links-utiles/home-links-utiles/home-links-utiles.component';
import { HomeEstudioCursandoComponent } from './Paginas/Estudios/cursando/home-estudio-cursando/home-estudio-cursando.component';
import { HomeEstudioFinalizadoComponent } from './Paginas/Estudios/finalizado/home-estudio-finalizado/home-estudio-finalizado.component';
import { TestingQACacComponent } from './Paginas/Estudios/cursando/testing-qa-cac/testing-qa-cac.component';
import { FullStackJavaCacComponent } from './Paginas/Estudios/finalizado/full-stack-java-cac/full-stack-java-cac.component';
import { LinksUtilesGeneralComponent } from './Paginas/Links-utiles/links-utiles-general/links-utiles-general.component';
import { OtroHomeComponent } from './Paginas/otro/otro-home/otro-home.component';
import { OtroRecetasComponent } from './Paginas/otro/otro-recetas/otro-recetas.component';
import { MapaMundoComponent } from './Paginas/Juegos/Juego-rpg/mapa-mundo/mapa-mundo.component';
import { MapaBosqueComponent } from './Paginas/Juegos/Juego-rpg/mapas-dentro-juego/mapa-bosque/mapa-bosque.component';
import { MapaMinaComponent } from './Paginas/Juegos/Juego-rpg/mapas-dentro-juego/mapa-mina/mapa-mina.component';
import { MapaLagoComponent } from './Paginas/Juegos/Juego-rpg/mapas-dentro-juego/mapa-lago/mapa-lago.component';
import { MapaCasaComponent } from './Paginas/Juegos/Juego-rpg/mapas-dentro-juego/mapa-pueblo/mapa-casa/mapa-casa.component';
import { MapaPuebloComponent } from './Paginas/Juegos/Juego-rpg/mapas-dentro-juego/mapa-pueblo/mapa-pueblo/mapa-pueblo.component';
import { MapaPatioComponent } from './Paginas/Juegos/Juego-rpg/mapas-dentro-juego/mapa-pueblo/mapa-patio/mapa-patio.component';
import { HomeJuegoRpgComponent } from './Paginas/Juegos/Juego-rpg/home-juego-rpg/home-juego-rpg.component';

export const routes: Routes = [
  /*general*/
  { path: '', component: HomeComponent },
  /*home*/
  { path: 'home', component: HomeComponent },
  /*juegos*/
  { path: 'home-palia', component: HomePaliaComponent },
  { path: 'home-juegos', component: HomeJuegosComponent },
  /*juego-rpg*/
  {
    path: 'home-juego-rpg', component: HomeJuegoRpgComponent, children: [
      { path: 'mapa-mundo', component: MapaMundoComponent },
      { path: 'mapa-bosque', component: MapaBosqueComponent },
      { path: 'mapa-mina', component: MapaMinaComponent },
      { path: 'mapa-lago', component: MapaLagoComponent },
      { path: 'mapa-casa', component: MapaCasaComponent },
      { path: 'mapa-pueblo', component: MapaPuebloComponent },
      { path: 'mapa-patio', component: MapaPatioComponent }]
  },
  /*bdo*/
  { path: 'home-bdo', component: HomeBdoComponent },
  { path: 'vista-personaje-bdo/:id', component: VistaPersonajeBdoComponent },
  /*links*/
  {
    path: 'home-links-utiles', component: HomeLinksUtilesComponent, children: [
      { path: 'General', component: LinksUtilesGeneralComponent },
      { path: 'programacion', component: LinksUtilesGeneralComponent },
      { path: 'anime', component: LinksUtilesGeneralComponent },
      { path: 'idioma', component: LinksUtilesGeneralComponent },
      { path: 'juego', component: LinksUtilesGeneralComponent },
      { path: 'manga-manhwa', component: LinksUtilesGeneralComponent },
      { path: 'otro', component: LinksUtilesGeneralComponent },
      { path: 'estudioGeneral', component: LinksUtilesGeneralComponent }
    ]
  },
  /*estudios*/
  {
    path: 'home-estudios', component: HomeEstudiosComponent, children: [
      {
        path: 'cursos-cursando-home', component: HomeEstudioCursandoComponent, children: [
          { path: 'curso-testing&QA-cac', component: TestingQACacComponent },
        ]
      },
      {
        path: 'cursos-finalizados-home', component: HomeEstudioFinalizadoComponent, children: [
          { path: 'curso-fullStackJava-cac', component: FullStackJavaCacComponent }
        ]
      },
    ]
  },
  /*otro*/
  {
    path: 'home-otro', component: OtroHomeComponent, children: [
      { path: 'recetas-otro', component: OtroRecetasComponent }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
