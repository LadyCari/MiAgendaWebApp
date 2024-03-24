import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalLinkComponent } from 'src/app/Modales/modal-link/modal-link.component';
import { HttpService } from 'src/app/Servicios/http.service';
import { Url } from 'src/app/url';

@Component({
  selector: 'app-links-utiles-anime',
  templateUrl: './links-utiles-anime.component.html',
  styleUrls: ['./links-utiles-anime.component.css']
})
export class LinksUtilesAnimeComponent implements OnInit {

  constructor(private httpService: HttpService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.obtenerLista();
  }

  readonly url = Url;
  listaLinks: any;
  nuevoLink: any;

  private obtenerLista() {
    this.httpService.realizarGet(this.url.getLinks + 'Anime').subscribe((data: any) => {
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

  truncarTexto(texto: string, longitud: number): string {
    if (texto.length > longitud) {
      return texto.substring(0, longitud) + '...';
    }
    return texto;
  }

}
