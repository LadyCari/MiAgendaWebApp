import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarEventoCalendarioComponent } from 'src/app/Modales/agregar-evento-calendario/agregar-evento-calendario.component';
import { AgregarRutinaSemanalComponent } from 'src/app/Modales/agregar-rutina-semanal/agregar-rutina-semanal.component';
import { HttpService } from 'src/app/Servicios/http.service';
import { ModoOscuroService } from 'src/app/Servicios/modoOscuro/modo-oscuro.service';
import { Url } from 'src/app/url';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private httpService: HttpService, private dialog: MatDialog, private modoNoche: ModoOscuroService) {
  }

  ngOnInit() {
    this.vistaPendientes();
    this.cambiarFechas();
    this.getRutinas();
    this.getEventos();
    this.modoNoche.modoNoche$.subscribe(value => {
      this.noche = value;
    });
  }

  readonly url = Url;
  listaPendientes: any[] = [];
  nuevoPendiente: any = { tipo: '', descripcion: '' };
  mes: number = new Date().getMonth();
  ano: number = new Date().getFullYear();
  diaMes: number[] = [];
  numeroSemanas: number[] = [];
  listaMeses: { nombre: string, numero: number }[] =
    [{ nombre: 'Enero', numero: 1 },
    { nombre: 'Febrero', numero: 2 },
    { nombre: 'Marzo', numero: 3 },
    { nombre: 'Abril', numero: 4 },
    { nombre: 'Mayo', numero: 5 },
    { nombre: 'Junio', numero: 6 },
    { nombre: 'Julio', numero: 7 },
    { nombre: 'Agosto', numero: 8 },
    { nombre: 'Septiembre', numero: 9 },
    { nombre: 'Octubre', numero: 10 },
    { nombre: 'Noviembre', numero: 11 },
    { nombre: 'Diciembre', numero: 12 }];
  diaInicio: number = 0;
  diasSemana: string[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  noche: boolean = false;

  /*--------------------------------------Loading--------------------------------------*/



  /*---------------------------------------Rutina--------------------------------------*/
  listaRutinas: any[] = [];
  listaHorarios: any[] = [];

  public eliminarActividad(actividad: any) {
    this.httpService.realizarDelete(this.url.deleteActividad + actividad.actividadId).subscribe((data: any) => {
      if (data.state == 'OK') {
        const index = this.listaRutinas.findIndex((pendiente: any) => pendiente === actividad);
        if (index !== -1) {
          this.listaRutinas.splice(index, 1);
        }
      }
    });
  }

  public putRutina() {
    this.dialog.open(AgregarRutinaSemanalComponent, {
      height: 'auto',
      width: 'auto',
    });
  }

  private getRutinas() {
    this.httpService.realizarGet(this.url.getActividad).subscribe((data: any) => {
      if (data.state == 'OK') {
        this.listaRutinas = data.data;
        this.listaHoras();
      }
    });
  }

  public listaHoras() {
    this.listaRutinas.forEach(rutina => {
      let horaI = rutina.horarioInicio;
      let horaF = rutina.horarioFin;
      let existe = this.listaHorarios.find(horario => horario == horaI);
      let existe2 = this.listaHorarios.find(horario => horario == horaF);
      if (existe == undefined) {
        this.listaHorarios.push(horaI);
      }
      if (existe2 == undefined) {
        this.listaHorarios.push(horaF);
      }
    });
    this.listaHorarios.sort((a, b) => a.localeCompare(b));
  }


  existe(dia: string, listaDias: any[]) {
    for (let cosa of listaDias) {
      if (cosa == dia) {
        return true;
      }

    }
    return false;
  }

  /*-------------------------------------calendario---------------------------------*/

  mesSeleccionado: any = {
    nombre: this.obtenerNombreMes(new Date().getMonth() + 1),
    numero: new Date().getMonth() + 1
  };
  anoActual: number = new Date().getFullYear();
  listaEventos: any[] = [];

  public eliminarEvento(evento: any) {
    this.httpService.realizarDelete(this.url.deleteEventoCalendario + evento.idEvento).subscribe((data: any) => {
      if (data.state == 'OK') {
        const index = this.listaEventos.findIndex((eventoList: any) => eventoList === evento);
        if (index !== -1) {
          this.listaEventos.splice(index, 1);
        }
      }
    });
  }

  private getEventos() {
    const params = new HttpParams()
      .append('mes', this.mesSeleccionado.numero)
      .append('ano', this.ano);

    this.httpService.realizarGet(this.url.getEventoCalendario, false, { params }).subscribe((data: any) => {
      if (data.state === 'OK') {
        this.listaEventos = data.data;
      }
    });
  }

  public postEvento() {
    const dialogRef = this.dialog.open(AgregarEventoCalendarioComponent, {
      height: 'auto',
      width: 'auto',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.listaEventos.push(result); // Agregar el objeto resultante a la lista
      }
    });
  }

  cambiarMes(mes: number) {
    if (mes == -1) {
      this.mesSeleccionado.numero = (this.mesSeleccionado.numero + mes == 0) ? 12 : this.mesSeleccionado.numero + mes;
    } else {
      this.mesSeleccionado.numero = (this.mesSeleccionado.numero + mes > 12) ? 1 : this.mesSeleccionado.numero + mes;
    }
    this.mesSeleccionado.nombre = this.obtenerNombreMes(this.mesSeleccionado.numero);
    this.cambiarFechas();
  }

  cambiarFechas() {
    this.generarDiasDelMes();
    this.generarNumeroSemanas();
    this.diaInicio = this.obtenerDiaInicio(this.mesSeleccionado.numero, this.ano);
  }

  obtenerDiaInicio(mes: number, ano: number): number {
    const primerDia = new Date(ano, mes - 1, 1).getDay();
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
    const ultimoDia = new Date(this.ano, this.mesSeleccionado.numero, 0).getDate();

    this.diaMes = [];
    for (let dia = 1; dia <= ultimoDia; dia++) {
      this.diaMes.push(dia);
    }
  }

  generarNumeroSemanas() {
    const totalSemanas = Math.ceil(this.diaMes.length / 7);
    this.numeroSemanas = Array(totalSemanas).fill(0).map((_, i) => i);
  }

  esDiaEvento(dia: number, mes: number, ano: number, evento: any): boolean {
    const fechaDia = new Date(ano, mes - 1, dia).setHours(0);
    const fechaInicio = new Date(evento.fechaInicio).setHours(0);
    const fechaFin = new Date(evento.fechaFin).setHours(0);

    return fechaDia >= fechaInicio && fechaDia <= fechaFin;
  }

  obtenerClaseEvento(dia: number, mes: number, ano: number): string {
    for (let evento of this.listaEventos) {
      if (this.esDiaEvento(dia, mes, ano, evento)) {
        return `evento-${evento.tipoEvento.toLowerCase()}`;
      }
    }
    return '';
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