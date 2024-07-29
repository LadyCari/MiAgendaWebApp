import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/app/Servicios/http.service';
import { Url } from 'src/app/url';
import { ModalLifeRecoleccionComponent } from '../../modales/modal-life-recoleccion/modal-life-recoleccion.component';

@Component({
  selector: 'app-mapa-bosque',
  templateUrl: './mapa-bosque.component.html',
  styleUrls: ['./mapa-bosque.component.css']
})
export class MapaBosqueComponent implements OnInit {

  ngOnInit(){
  }

  constructor(private dialog: MatDialog, private httpService: HttpService){
  }

  public modal() {
    this.dialog.open(ModalLifeRecoleccionComponent, {
      height: 'auto',
      width: 'auto',
    });
  }

}
