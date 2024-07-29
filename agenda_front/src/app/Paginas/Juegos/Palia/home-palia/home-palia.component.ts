import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Servicios/http.service';
import { Url } from 'src/app/url';
import { MatTableDataSource } from '@angular/material/table';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home-palia',
  templateUrl: './home-palia.component.html',
  styleUrls: ['./home-palia.component.css'],
})
export class HomePaliaComponent implements OnInit {

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

  dataSource = new MatTableDataSource<any>([]);
  listaItems: any[] = [];
  readonly url = Url;
  cantidadItems = 0;
  pagina = 0;
  cantidad = 10;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.cargarDatosItems();
  }

  private cargarDatosItems() {
    const param = new HttpParams()
      .append('pagina', this.pagina)
      .append('cantidad', this.cantidad);

    this.httpService.realizarGet(this.url.getAllItems, false, param).subscribe((data: any) => {
      if (data.state == 'OK') {
        this.listaItems = data.items;
        this.cantidadItems = data.registros;
      }
    })
  }
  
  /*
    private nuevoItem(){
      this.httpService.realizarPost(this.url.addItem).subscribe((data:any) =>{
        if (data.state == 'OK'){
  
        }
      })
    }
  */
  /*
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
    */
}
