import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  ngOnInit(): void {
    this.obtenerItems(this.paginaActual, this.elementosPorPagina, '');
  }

  /* ------ constantes ------*/

  paginaActual: number = 1;
  elementosPorPagina: number = 9;
  totalItems: number = 0;
  listaItems: any[] = ['Pescado', 'perro', 'lala'];
  buscar: string = '';

  /* ------ datos traidos ------*/

  private obtenerItems(paginaActual: number, elementosPorPagina: number, buscar: string) {
    /*
    this.httpService.realizarGet(`${this.url.getLinks}${categoria}&pagina=${paginaActual}&cantidad=${elementosPorPagina}&buscar=${buscar}`).subscribe((data: any) => {
      if (data.state == 'OK') {
        this.listaItems = data.data.links;
        this.totalItems = data.data.registros;
      }
    });*/
  }

  /* ------ otras funciones ------*/

  totalPaginas(): number {
    return Math.ceil(this.totalItems / this.elementosPorPagina);
  }

  cambiarPagina(pagina: number) {
    if (pagina != this.paginaActual && pagina >= 1 && pagina <= this.totalPaginas()) {
      this.paginaActual = pagina;
      this.obtenerItems(this.paginaActual, this.elementosPorPagina, this.buscar);
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

  manejarBusqueda(event: Event) {
    this.buscar = (event.target as HTMLInputElement).value;
    this.obtenerItems(this.paginaActual, this.elementosPorPagina, this.buscar);
  }
}
