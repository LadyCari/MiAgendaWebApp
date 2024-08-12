import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/app/Servicios/http.service';
import { DetallesPjComponent } from '../../modales/General/detalles-pj/detalles-pj.component';
import { InventarioComponent } from '../../modales/General/inventario/inventario.component';

@Component({
  selector: 'app-home-parte-izquierda',
  templateUrl: './home-parte-izquierda.component.html',
  styleUrls: ['./home-parte-izquierda.component.css']
})
export class HomeParteIzquierdaComponent {

  constructor(private httpService: HttpService, private dialog: MatDialog){
  }

  public detallePj() {
    this.dialog.open(DetallesPjComponent, {
      height: 'auto',
      width: '55rem',
    });
  }

  abrirInventario(){
    this.dialog.open(InventarioComponent, {
      height: 'auto',
      width: 'auto',
    });
  }

}
