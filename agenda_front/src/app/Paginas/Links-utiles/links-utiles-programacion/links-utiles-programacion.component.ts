import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalLinkComponent } from 'src/app/Modales/modal-link/modal-link.component';
import { HttpService } from 'src/app/Servicios/http.service';
import { Url } from 'src/app/url';

@Component({
  selector: 'app-links-utiles-programacion',
  templateUrl: './links-utiles-programacion.component.html',
  styleUrls: ['./links-utiles-programacion.component.css']
})
export class LinksUtilesProgramacionComponent implements OnInit {
  paginaActual: number = 1;
  elementosPorPagina: number = 9;
  totalLinks: number = 0;

  constructor(private httpService: HttpService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.obtenerLista(this.paginaActual, this.elementosPorPagina);
  }

  readonly url = Url;
  listaLinks: any;
  nuevoLink: any;
  categoriaSeleccionada: string = '';


  private obtenerLista(paginaActual: number, elementosPorPagina: number) {
    this.httpService.realizarGet(`${this.url.getLinks}Programación&pagina=${paginaActual}&cantidad=${elementosPorPagina}`).subscribe((data: any) => {
      if (data.state == 'OK') {
        this.listaLinks = data.data.links;
        this.totalLinks = data.data.registros;
      }
    });
  }


  truncarTexto(texto: string, longitud: number): string {
    if (texto.length > longitud) {
      return texto.substring(0, longitud) + '...';
    }
    return texto;
  }

  totalPaginas(): number {
    return Math.ceil(this.totalLinks / this.elementosPorPagina);
  }

  cambiarPagina(pagina: number) {
    if (pagina != this.paginaActual && pagina >= 1 && pagina <= this.totalPaginas()) {
      this.paginaActual = pagina;
      this.obtenerLista(this.paginaActual, this.elementosPorPagina);
    }
  }

  paginas(): number[] {
    const paginas: number[] = [];
    for (let i = 1; i <= this.totalPaginas(); i++) {
      paginas.push(i);
    }
    return paginas;
  }
  esPaginaActual(numPagina: number): boolean {
    return numPagina === this.paginaActual;
  }

  public postLink(categoria:string) {
    this.categoriaSeleccionada = categoria;
    this.dialog.open(ModalLinkComponent, {
      data:{categoria: this.categoriaSeleccionada},
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
