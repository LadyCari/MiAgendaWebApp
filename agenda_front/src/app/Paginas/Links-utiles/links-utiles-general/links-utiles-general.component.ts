import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalLinkComponent } from 'src/app/Modales/modal-link/modal-link.component';
import { HttpService } from 'src/app/Servicios/http.service';
import { Url } from 'src/app/url';

@Component({
  selector: 'app-links-utiles-general',
  templateUrl: './links-utiles-general.component.html',
  styleUrls: ['./links-utiles-general.component.css']
})
export class LinksUtilesGeneralComponent implements OnInit {

  paginaActual: number = 1;
  elementosPorPagina: number = 9;
  totalLinks: number = 0;
  categoriaSeleccionada: string = '';
  categoria: string = '';
  titulo: string = '';
  buscar: string = '';

  constructor(private httpService: HttpService, private dialog: MatDialog, private router: Router) {
  }

  ngOnInit(): void {
    const url = this.router.url;
    const segments = url.split('/');
    this.categoria = segments[segments.length - 1];
    this.tituloComponente();
    this.obtenerLista(this.paginaActual, this.elementosPorPagina, this.categoria, '');
  }

  readonly url = Url;
  listaLinks: any[] = [];
  nuevoLink: any;

  private obtenerLista(paginaActual: number, elementosPorPagina: number, categoria: string, buscar: string) {
    this.httpService.realizarGet(`${this.url.getLinks}${categoria}&pagina=${paginaActual}&cantidad=${elementosPorPagina}&buscar=${buscar}`).subscribe((data: any) => {
      if (data.state == 'OK') {
        this.listaLinks = data.data.links;
        this.totalLinks = data.data.registros;
      }
    });
  }

  public postLink(categoria: string) {
    this.categoriaSeleccionada = categoria;
    this.dialog.open(ModalLinkComponent, {
      data: { categoria: this.categoriaSeleccionada },
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

  totalPaginas(): number {
    return Math.ceil(this.totalLinks / this.elementosPorPagina);
  }

  cambiarPagina(pagina: number) {
    if (pagina != this.paginaActual && pagina >= 1 && pagina <= this.totalPaginas()) {
      this.paginaActual = pagina;
      this.obtenerLista(this.paginaActual, this.elementosPorPagina, this.categoria, this.buscar);
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

  private tituloComponente() {

    switch (this.categoria) {
      case 'programacion':
        this.titulo = '✯*¨*•✿•*¨*•.¸✯ Links utiles Programacion ✯¸.•*¨*•✿•*¨*✯'
        break;
      case 'manga-manhwa':
        this.titulo = '︵‿︵‿୨ Mangas y manhwas ୧‿︵‿︵'
        break;
      case 'estudioGeneral':
        this.titulo = '✩₊˚.⋆☾⋆⁺✧.⋆⁺₊✧ Links para estudios generales ✩₊˚.⋆☾⋆✩₊.⋆☾⋆₊'
        break;
      case 'idioma':
        this.titulo = '｡ ﾟ* ꒰ঌ ✦໒꒱ .ﾟ Paginas de idiomas ｡ ﾟ ꒰ঌ ✦໒꒱ ༘*.ﾟ'
        break;
      case 'anime':
        this.titulo = '˚ ‿︵‿︵‿︵୨୧ Links y capítulos de anime ୨୧‿︵‿︵‿︵ ˚'
        break;
      case 'juego':
        this.titulo = '──૮₍´｡ᵔ ꈊ ᵔ｡`₎ა── Paginas de juegos ──૮₍˶ •. • ⑅₎ა ♡──'
        break;
      case 'otro':
        this.titulo = '──── ꩜ 🫧˙✧˖° 🫧 ⋆｡ Otras cosas ✧˖° 🫧 ⋆｡˚꩜ 🫧 ⋆｡ ───'
        break;
    }

  }

  manejarBusqueda(event: Event) {
    this.buscar = (event.target as HTMLInputElement).value;

    this.obtenerLista(this.paginaActual, this.elementosPorPagina, this.categoria, this.buscar);
  }

  public favorito(link: any) {

    link.favorito = !link.favorito;
    this.httpService.realizarPut(this.url.editLinks, link).subscribe((data: any) => {
      if (data.state == 'OK') {
      }
    });
  }
}
