import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpService } from 'src/app/Servicios/http.service';
import { Url } from 'src/app/url';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ConstantesPalia, ItemPalia } from 'src/app/Entidades/model-interface';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-home-palia',
  templateUrl: './home-palia.component.html',
  styleUrls: ['./home-palia.component.css'],
})
export class HomePaliaComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'img',
    'nombre',
    'precio',
    'precioComposta',
    'ganancia',
    'profit',
    'lumisanos',
    'speedyGro',
    'harversBoost',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<any>([]);
  items: ItemPalia[] = [];
  constantes: ConstantesPalia[] = [];
  resultsLength = 0;
  loading = true;

  constructor(private httpService: HttpService) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.cargarDatosItems();
    this.dataSource.paginator = this.paginator;
    this.cargarDatosConstantes();
  }

  private async cargarDatosItems() {
    try {
      let respuesta = this.httpService.realizarGet(Url.urlItems);
      this.items = await lastValueFrom(respuesta);

      this.dataSource.data = this.items;
    } catch (error) {
      console.log('error', error);
    }
  }

  private async cargarDatosConstantes() {
    try {
      let respuesta = this.httpService.realizarGet(Url.urlConstantes);
      this.constantes = await lastValueFrom(respuesta);
      this.costoComposta();
      this.profit();
      this.ganacia();
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    } catch (error) {
      console.log('error', error);
    }
  }

  private costoComposta() {
    for (let item of this.items) {
      item.precioFinal = 0;
      for (let constantes of this.constantes) {
        switch (constantes.nombre) {
          case 'Lumigusanos':
            item.precioFinal += item.lumigusanos * constantes.precio;
            break;
          case 'SpeedyGro':
            item.precioFinal += item.speedyGro * constantes.precio;
            break;
          case 'HarversBoost':
            item.precioFinal += item.harversBoost * constantes.precio;
            break;
        }
      }
    }
  }

  private profit() {
    for (let item of this.items) {
      item.profit = (item.precioFinal * 100) / item.precio;
    }
  }

  private ganacia() {
    for (let item of this.items) {
      item.ganancia = item.precioFinal - item.precio;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
