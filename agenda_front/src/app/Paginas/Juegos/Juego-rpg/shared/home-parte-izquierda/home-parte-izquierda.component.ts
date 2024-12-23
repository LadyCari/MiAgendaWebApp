import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/app/Servicios/http.service';
import { DetallesPjComponent } from '../../modales/General/detalles-pj/detalles-pj.component';
import { InventarioComponent } from '../../modales/General/inventario/inventario.component';
import { PanelAdmComponent } from '../../modales/panel-adm/panel-adm.component';
import { Url } from 'src/app/url';


@Component({
  selector: 'app-home-parte-izquierda',
  templateUrl: './home-parte-izquierda.component.html',
  styleUrls: ['./home-parte-izquierda.component.css']
})
export class HomeParteIzquierdaComponent implements OnInit {

  constructor(private httpService: HttpService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.obtenerDatosPj();
  }

  /* ------ constantes ------*/

  readonly url = Url;
  pj: any;

  /* ------ abrir datos ------*/

  abrirDatosPj() {
    this.dialog.open(DetallesPjComponent, {
      height: '80%',
      width: '90%',
    });
  }

  abrirInventario() {
    this.dialog.open(InventarioComponent, {
      height: '70%',
      width: '80%',
    });
  }

  /* ------ datos traidos ------*/

  private obtenerDatosPj() {
    this.httpService.realizarGet(this.url.getpjIzquierdaDTO).subscribe((data: any) => {
      if (data.state == 'OK') {
        this.pj = data.data;
        this.pj.forEach((dato: any) => {
          dato.foto = this.getImagenSrc(dato.foto);
        });
      }
    })
  }

  /* ------ adm ------*/

  abrirPanelAdmin() {
    this.dialog.open(PanelAdmComponent, {
      height: '55rem',
      width: '55rem',
    })
  }

  /* ------ otras funciones ------*/

  getImagenSrc(base64Data: string): string {
    if (base64Data) {
      return `data:image/png;base64,${base64Data}`;
    }
    return '';
  }

}
