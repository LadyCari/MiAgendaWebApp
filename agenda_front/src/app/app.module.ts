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
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HomePaliaComponent } from './Paginas/Juegos/Palia/home-palia/home-palia.component';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { LoadingComponent } from './Paginas/loading/loading.component';
import { HomeBdoComponent } from './Paginas/Juegos/BlackDessert/home-bdo/home-bdo.component';
import { ModalCargarPjComponent } from './Modales/modal-cargar-pj/modal-cargar-pj.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { VistaPersonajeBdoComponent } from './Paginas/Juegos/BlackDessert/vista-personaje-bdo/vista-personaje-bdo.component';
import { HomeJuegosComponent } from './Paginas/Juegos/home-juegos/home-juegos.component';
import { HomeLinksUtilesComponent } from './Paginas/Links-utiles/home-links-utiles/home-links-utiles.component';
import { LinksUtilesProgramacionComponent } from './Paginas/Links-utiles/links-utiles-programacion/links-utiles-programacion.component';
import { LinksUtilesJuegosComponent } from './Paginas/Links-utiles/links-utiles-juegos/links-utiles-juegos.component';
import { FullStackJavaCacComponent } from './Paginas/Estudios/finalizado/full-stack-java-cac/full-stack-java-cac.component';
import { TestingQACacComponent } from './Paginas/Estudios/cursando/testing-qa-cac/testing-qa-cac.component';
import { HomeComponent } from './Paginas/Home/home.component';

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
    LinksUtilesProgramacionComponent, 
    LinksUtilesJuegosComponent, 
    FullStackJavaCacComponent, 
    HomeComponent,
    TestingQACacComponent],
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
    ReactiveFormsModule
  ],
  exports:[
    MatPaginatorModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
