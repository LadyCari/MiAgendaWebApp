import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModoOscuroService } from 'src/app/Servicios/modoOscuro/modo-oscuro.service';
import { AgregarCursoComponent } from 'src/app/Modales/agregar-curso/agregar-curso.component';
import { HttpParams } from '@angular/common/http';
import { HttpService } from 'src/app/Servicios/http.service';
import { Url } from 'src/app/url';

@Component({
  selector: 'app-home-estudios',
  templateUrl: './home-estudios.component.html',
  styleUrls: ['./home-estudios.component.css']
})
export class HomeEstudiosComponent implements OnInit {

  path: string = 'cursos-home';
  noche: boolean = false;
  public esVerdadero: boolean = true;
  readonly url = Url;
  listaCursos: any[] = [];

  ngOnInit(): void {
    this.modoNoche.modoNoche$.subscribe(value => {
      this.noche = value;
    });
    this.getCursos(this.esVerdadero);
  }

  constructor(private modoNoche: ModoOscuroService, private dialog: MatDialog, private httpService: HttpService) {
  }

  public agregarCurso() {
    this.dialog.open(AgregarCursoComponent, {
      height: 'auto',
      width: 'auto',
    });
  }

  getCursos(cursa: boolean) {
    const params = new HttpParams().append('cursando', cursa)
    this.httpService.realizarGet(this.url.getDatosCurso, undefined, { params }).subscribe((data: any) => {
      if (data.state == 'OK') {
        this.listaCursos = data.data;
      }
    });
  }
}
