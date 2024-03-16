import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePaliaComponent } from './Paginas/Juegos/Palia/home-palia/home-palia.component';
import { HomeBdoComponent } from './Paginas/Juegos/BlackDessert/home-bdo/home-bdo.component';
import { HomeJuegosComponent } from './Paginas/Juegos/home-juegos/home-juegos.component';
import { VistaPersonajeBdoComponent } from './Paginas/Juegos/BlackDessert/vista-personaje-bdo/vista-personaje-bdo.component';
import { HomeComponent } from './Paginas/Home/home.component';
import { HomeEstudiosComponent } from './Paginas/Estudios/home-estudios/home-estudios.component';
import { HomeLinksUtilesComponent } from './Paginas/Links-utiles/home-links-utiles/home-links-utiles.component';
import { LinksUtilesProgramacionComponent } from './Paginas/Links-utiles/links-utiles-programacion/links-utiles-programacion.component';
import { HomeEstudioCursandoComponent } from './Paginas/Estudios/cursando/home-estudio-cursando/home-estudio-cursando.component';
import { HomeEstudioFinalizadoComponent } from './Paginas/Estudios/finalizado/home-estudio-finalizado/home-estudio-finalizado.component';
import { TestingQACacComponent } from './Paginas/Estudios/cursando/testing-qa-cac/testing-qa-cac.component';
import { FullStackJavaCacComponent } from './Paginas/Estudios/finalizado/full-stack-java-cac/full-stack-java-cac.component';
import { LinksUtilesAnimeComponent } from './Paginas/Links-utiles/links-utiles-anime/links-utiles-anime.component';
import { LinksUtilesIdiomasComponent } from './Paginas/Links-utiles/links-utiles-idiomas/links-utiles-idiomas.component';
import { LinksUtilesJuegosComponent } from './Paginas/Links-utiles/links-utiles-juegos/links-utiles-juegos.component';
import { ManhwasComponent } from './Paginas/Links-utiles/links-utiles-mangas/manhwas/manhwas.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home-palia', component: HomePaliaComponent },
  { path: 'home-bdo', component: HomeBdoComponent},
  { path: 'home-juegos', component: HomeJuegosComponent},
  { path: 'vista-personaje-bdo/:id', component: VistaPersonajeBdoComponent},
  { path: 'home-links-utiles', component: HomeLinksUtilesComponent},
  { path: 'cosas-utiles-programacion', component: LinksUtilesProgramacionComponent},
  { path: 'cosas-utiles-anime', component: LinksUtilesAnimeComponent},
  { path: 'cosas-utiles-idioma', component: LinksUtilesIdiomasComponent},
  { path: 'cosas-utiles-juegos', component: LinksUtilesJuegosComponent},
  { path: 'cosas-utiles-mangas/manhwas', component: ManhwasComponent},
  { path: 'home-estudios', component: HomeEstudiosComponent},
  { path: 'cursos-cursando-home', component: HomeEstudioCursandoComponent},
  { path: 'cursos-finalizados-home', component: HomeEstudioFinalizadoComponent},
  { path: 'curso-testing&QA-cac', component: TestingQACacComponent},
  { path: 'curso-fullStackJava-cac', component: FullStackJavaCacComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
