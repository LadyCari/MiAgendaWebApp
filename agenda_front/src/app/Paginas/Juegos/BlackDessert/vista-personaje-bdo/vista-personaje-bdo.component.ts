import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/Servicios/http.service';
import { Url } from 'src/app/url';

@Component({
  selector: 'app-vista-personaje-bdo',
  templateUrl: './vista-personaje-bdo.component.html',
  styleUrls: ['./vista-personaje-bdo.component.css']
})

export class VistaPersonajeBdoComponent implements OnInit{

readonly url = Url;

constructor(private route: ActivatedRoute, private httpService: HttpService){
}

ngOnInit() {
  // Recuperar la ID de la URL
  const id = this.route.snapshot.paramMap.get('id');

  // Utilizar la ID como necesites
  console.log('ID recuperada de la URL:', id);
}

/*
public informacionPj (id: number){
  personaje = this.httpService.realizarGet(this.url. + id)
}
*/
}
