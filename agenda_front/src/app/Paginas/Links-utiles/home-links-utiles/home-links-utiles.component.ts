import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { ModalLinkComponent } from 'src/app/Modales/modal-link/modal-link.component';
import { HttpService } from 'src/app/Servicios/http.service';
import { ModoOscuroService } from 'src/app/Servicios/modoOscuro/modo-oscuro.service';
import { Url } from 'src/app/url';

@Component({
  selector: 'app-home-links-utiles',
  templateUrl: './home-links-utiles.component.html',
  styleUrls: ['./home-links-utiles.component.css']
})

export class HomeLinksUtilesComponent implements OnInit {

  constructor(private httpService: HttpService, private dialog: MatDialog, private modoNoche: ModoOscuroService) {
  }

  ngOnInit(): void {
    this.obtenerLista();
    this.modoNoche.modoNoche$.subscribe(value => {
      this.noche = value;
    });
  }

  readonly url = Url;
  listaLinks: any[] = [];
  nuevoLink: any;
  noche: boolean = false;

  private obtenerLista() {
    this.httpService.realizarGet(`${this.url.getLinks}General&pagina=1&cantidad=10`).subscribe((data: any) => {
      if (data.state == 'OK') {
        this.listaLinks = data.data;
      }
    });
  }

  public postLink() {
    this.dialog.open(ModalLinkComponent, {
      height: 'auto',
      width: 'auto',
    });
  }

  public putsLink(link: any) {
    this.dialog.open(ModalLinkComponent, {
      height: 'auto',
      width: 'auto',
      data: { link: link }
    });
  }

  public modificarLink(linkEdit: any) {
    this.httpService.realizarPut(this.url.editLinks).subscribe((data: any) => {
      if (data.state == "OK") {

      }
    });
  }

  public deleteLink(link: any) {
    console.log(link)
    this.httpService.realizarDelete(this.url.deleteLinks + link.linkId).subscribe((data: any) => {
      if (data.state == "OK") {
        const index = this.listaLinks.findIndex((pendiente: any) => pendiente === link);
        if (index !== -1) {
          this.listaLinks.splice(index, 1);
        }
      }
    })
  }

}
