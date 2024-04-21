import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarEventoCalendarioComponent } from 'src/app/Modales/agregar-evento-calendario/agregar-evento-calendario.component';
import { HttpService } from 'src/app/Servicios/http.service';
import { Url } from 'src/app/url';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private httpService: HttpService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.vistaPendientes();
    this.cambiarFechas();
    const currentDate = new Date();
    const anio = currentDate.getFullYear();
    const mes = currentDate.getMonth() + 1;

    this.getEventosCalendario(mes, anio);
  }

  readonly url = Url;
  listaPendientes: any[] = [];
  nuevoPendiente: any = { tipo: '', descripcion: '' };
  eventosCalendario: any[] = [];
  mes: number = new Date().getMonth();
  ano: number = new Date().getFullYear();
  diaMes: number[] = [];
  numeroSemanas: number[] = [];
  listaMeses: { nombre: string, numero: number }[] =
    [{ nombre: 'Enero', numero: 0 },
    { nombre: 'Febrero', numero: 1 },
    { nombre: 'Marzo', numero: 2 },
    { nombre: 'Abril', numero: 3 },
    { nombre: 'Mayo', numero: 4 },
    { nombre: 'Junio', numero: 5 },
    { nombre: 'Julio', numero: 6 },
    { nombre: 'Agosto', numero: 7 },
    { nombre: 'Septiembre', numero: 8 },
    { nombre: 'Octubre', numero: 9 },
    { nombre: 'Noviembre', numero: 10 },
    { nombre: 'Diciembre', numero: 11 }];
  diaInicio: number = 0;



  /*-------------------------------------calendario---------------------------------*/

  mesSeleccionado: any = { nombre: this.obtenerNombreMes(new Date().getMonth()), numero: new Date().getMonth() };

  public postEvento() {
    this.dialog.open(AgregarEventoCalendarioComponent, {
      height: 'auto',
      width: 'auto',
    });
  }

  cambiarMes(mes: number) {
    if (mes == -1) {
      this.mesSeleccionado.numero = (this.mesSeleccionado.numero + mes == -1) ? 11 : this.mesSeleccionado.numero + mes;
    } else {
      this.mesSeleccionado.numero = (this.mesSeleccionado.numero + mes > 11) ? 11 : this.mesSeleccionado.numero + mes;
    }
    this.mesSeleccionado.nombre = this.obtenerNombreMes(this.mesSeleccionado.numero);
    this.cambiarFechas();
    this.getEventosCalendario(this.mesSeleccionado.numero + 1, this.ano);
  }

  cambiarFechas() {
    this.generarDiasDelMes();
    this.generarNumeroSemanas();
    this.diaInicio = this.obtenerDiaInicio(this.mesSeleccionado.numero, this.ano);
  }

  obtenerDiaInicio(mes: number, ano: number): number {
    const primerDia = new Date(ano, mes, 1).getDay();
    return primerDia === 0 ? 7 : primerDia;
  }

  obtenerNombreMes(mesParam: number) {
    for (let mes of this.listaMeses) {
      if (mes.numero == mesParam) {
        return mes.nombre;
      }
    }
    return 0;
  }

  generarDiasDelMes() {
    const primerDia = new Date(this.ano, this.mesSeleccionado.numero, 1).getDate();
    const ultimoDia = new Date(this.ano, this.mesSeleccionado.numero + 1, 0).getDate();

    this.diaMes = [];
    for (let dia = 1; dia <= ultimoDia; dia++) {
      this.diaMes.push(dia);
    }
  }

  generarNumeroSemanas() {
    const totalSemanas = Math.ceil(this.diaMes.length / 7);
    this.numeroSemanas = Array(totalSemanas).fill(0).map((_, i) => i);
  }
  getDiaFecha(semana: number, dia: number): Date {
    const primerDiaMes = new Date(this.ano, this.mesSeleccionado.numero, 1);
    const diferenciaEnDias = semana * 7 + dia + 1 - this.diaInicio;
    return new Date(primerDiaMes.getTime() + diferenciaEnDias * 24 * 60 * 60 * 1000);
  }
  hayEventoEnFecha(fecha: Date): boolean {
    const fechaSinHora = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
    return this.eventosCalendario.some(evento => {
      const fechaInicioSinHora = new Date(new Date(evento.fechaInicio).getFullYear(), new Date(evento.fechaInicio).getMonth(), new Date(evento.fechaInicio).getDate());
      const fechaFinSinHora = new Date(new Date(evento.fechaFin).getFullYear(), new Date(evento.fechaFin).getMonth(), new Date(evento.fechaFin).getDate());
      return fechaSinHora >= fechaInicioSinHora && fechaSinHora <= fechaFinSinHora;
    });
  }
  private getEventosCalendario(mes: number, anio: number) {
    var params: HttpParams = new HttpParams()
    .append("mes", mes)
    .append("anio", anio)

    this.httpService.realizarGet(this.url.getEvento, undefined, { params }).subscribe((data: any) => {
      if (data.state == 'OK') {
        this.eventosCalendario = data.data;
      }
    });
  }



  /* ------------------------------------to do-------------------------------------------*/
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