import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePaliaComponent } from './Paginas/Juegos/Palia/home-palia/home-palia.component';
import { HomeBdoComponent } from './Paginas/Juegos/BlackDessert/home-bdo/home-bdo.component';
import { HomeJuegosComponent } from './Paginas/Juegos/home-juegos/home-juegos.component';
import { VistaPersonajeBdoComponent } from './Paginas/Juegos/BlackDessert/vista-personaje-bdo/vista-personaje-bdo.component';
import { HomeComponent } from './Paginas/Home/home.component';
import { HomeEstudiosComponent } from './Paginas/Estudios/home-estudios/home-estudios.component';
import { CosasUtilesHomeComponent } from './Paginas/Estudios/Cosas utiles/cosas-utiles-home/cosas-utiles-home.component';
import { CosasUtilesProgramacionComponent } from './Paginas/Estudios/Cosas utiles/cosas-utiles-programacion/cosas-utiles-programacion.component';
import { TestingCaCComponent } from './Paginas/Estudios/Cursos/testing-ca-c/testing-ca-c.component';
import { FullStackJavaCaCComponent } from './Paginas/Estudios/Cursos/full-stack-java-ca-c/full-stack-java-ca-c.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home-palia', component: HomePaliaComponent },
  { path: 'home-bdo', component: HomeBdoComponent},
  { path: 'home-juegos', component: HomeJuegosComponent},
  { path: 'vista-personaje-bdo/:id', component: VistaPersonajeBdoComponent},
  { path: 'home-estudios', component: HomeEstudiosComponent},
  { path: 'home-cosas-utiles', component: CosasUtilesHomeComponent},
  { path: 'cosas-utiles-programacion', component: CosasUtilesProgramacionComponent},
  { path: 'testing-cac', component: TestingCaCComponent},
  { path: 'full-stack-java-cac', component: FullStackJavaCaCComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
