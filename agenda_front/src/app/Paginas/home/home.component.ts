import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpService } from 'src/app/Servicios/http.service';
import { Url } from 'src/app/url';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.vistaPendientes();
    this.cargarDatosPagina();
  }

  readonly url = Url;
  listaPendientes: any[] = [];
  nuevoPendiente: any = { tipo: '', descripcion: '' };
  loading = true;


  private async cargarDatosPagina() {
    try {
      let respuesta = this.httpService.realizarGet(this.url.getPendiente);
      this.listaPendientes = await lastValueFrom(respuesta);
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    } catch (error) {
      console.log('error', error);
    }
  }



  private vistaPendientes() {

    this.httpService.realizarGet(this.url.getPendiente).subscribe((data: any) => {
      if (data.state == 'OK') {
        this.listaPendientes = data.data;
      }
    });
  }

  public postPendientes() {
    console.log(this.nuevoPendiente);
    this.httpService.realizarPost(this.url.PostPendiente, this.nuevoPendiente).subscribe((data: any) => {
      if (data.state == 'OK') {
        this.listaPendientes.push(data.data);
      }
    });

  }

  public eliminarPendiente(tarea: any) {
    this.httpService.realizarDelete(this.url.deletePendiente + tarea.pendienteId).subscribe((data: any) => {
      if (data.state == 'OK') {
        const index = this.listaPendientes.findIndex((pendiente: any) => pendiente === tarea);
        if (index !== -1) {
          this.listaPendientes.splice(index, 1);
        }
      }
    });
  }

}