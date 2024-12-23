import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Servicios/http.service';
import { Url } from 'src/app/url';

@Component({
  selector: 'app-detalles-pj',
  templateUrl: './detalles-pj.component.html',
  styleUrls: ['./detalles-pj.component.css']
})
export class DetallesPjComponent implements OnInit {

  constructor(HttpService: HttpService) {
  }

  ngOnInit(): void {
  }

  /* ------ constantes ------*/

  url = Url;

  /* ------ datos traidos ------*/

  
}
