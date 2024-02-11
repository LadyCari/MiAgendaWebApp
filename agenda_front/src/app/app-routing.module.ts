import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Paginas/home/home.component';
import { HomePaliaComponent } from './Paginas/Juegos/Palia/home-palia/home-palia.component';
import { HomeEstudiosComponent } from './Paginas/Estudios/home-estudios/home-estudios.component';
import { CosasUtilesComponent } from './Paginas/Estudios/cosas-utiles/cosas-utiles.component';
import { CodoACodoComponent } from './Paginas/Estudios/Cursos/codo-a-codo/codo-a-codo.component';
import { HomeBdoComponent } from './Paginas/Juegos/BlackDessert/home-bdo/home-bdo.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home-palia', component: HomePaliaComponent },
  { path: 'home-estudios', component: HomeEstudiosComponent },
  { path: 'cosas-utiles', component: CosasUtilesComponent },
  { path: 'codo-a-codo', component: CodoACodoComponent },
  { path: 'home-bdo', component: HomeBdoComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
