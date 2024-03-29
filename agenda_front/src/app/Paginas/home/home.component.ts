import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { AgregarEventoCalendarioComponent } from 'src/app/Modales/agregar-evento-calendario/agregar-evento-calendario.component';
import { ModalLinkComponent } from 'src/app/Modales/modal-link/modal-link.component';
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
  }

  readonly url = Url;
  listaPendientes: any[] = [];
  nuevoPendiente: any = { tipo: '', descripcion: '' };
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

  mesSeleccionado: any = { nombre: this.obtenerNombreMes(new Date().getMonth()), numero: new Date().getMonth() };

  public postEvento() {
    this.dialog.open(AgregarEventoCalendarioComponent, {
      height: 'auto',
      width: 'auto',
    });
  }
  
  cambiarMes(mes:number){
    if(mes == -1){
      this.mesSeleccionado.numero = (this.mesSeleccionado.numero + mes == -1) ? 11 : this.mesSeleccionado.numero + mes;
    } else{
      this.mesSeleccionado.numero = (this.mesSeleccionado.numero + mes > 11) ? 11 : this.mesSeleccionado.numero + mes;
    }
    this.mesSeleccionado.nombre = this.obtenerNombreMes(this.mesSeleccionado.numero);
    this.cambiarFechas();
  }

  cambiarFechas(){
    this.generarDiasDelMes();
    this.generarNumeroSemanas();
    this.diaInicio = this.obtenerDiaInicio(this.mesSeleccionado.numero, this.ano);
  }

  obtenerDiaInicio(mes: number, ano: number): number {
    const primerDia = new Date(ano, mes, 1).getDay();
    return primerDia === 0 ? 7 : primerDia; // Ajuste para que el domingo sea el último día (7)
  }

  obtenerNombreMes(mesParam:number) {
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
      console.log(dia);
    }
  }

  generarNumeroSemanas() {
    const totalSemanas = Math.ceil(this.diaMes.length / 7);
    this.numeroSemanas = Array(totalSemanas).fill(0).map((_, i) => i);
    console.log(this.numeroSemanas);
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