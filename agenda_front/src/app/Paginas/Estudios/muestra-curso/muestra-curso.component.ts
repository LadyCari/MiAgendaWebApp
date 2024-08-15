import { ViewportScroller } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/Servicios/http.service';
import { Url } from 'src/app/url';

@Component({
  selector: 'app-muestra-curso',
  templateUrl: './muestra-curso.component.html',
  styleUrls: ['./muestra-curso.component.css']
})
export class MuestraCursoComponent implements OnInit {

  estudioId: number = 0;
  curso: any;
  readonly url = Url;
  links: any[] = [];

  constructor(private route: ActivatedRoute, private httpService: HttpService) {

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.estudioId = params['id'];
      this.getCursos(this.estudioId);
    });
  }

  getCursos(id: number) {
    const params = new HttpParams().append('id', id)
    this.httpService.realizarGet(this.url.getCurso, undefined, { params }).subscribe((data: any) => {
      if (data.state == 'OK') {
        this.curso = data.data;
        this.links = this.curso.links
      }
    });
  }
}
