import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/app/Servicios/http.service';
import { ModalLinkComponent } from '../modal-link/modal-link.component';
import { Url } from 'src/app/url';

@Component({
  selector: 'app-agregar-evento-calendario',
  templateUrl: './agregar-evento-calendario.component.html',
  styleUrls: ['./agregar-evento-calendario.component.css']
})
export class AgregarEventoCalendarioComponent implements OnInit{

  readonly url = Url;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  nuevoEvento: FormGroup = this.formBuilder.group({});
  
  constructor(private httpService: HttpService, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<ModalLinkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.iniciarForm();
  }
  
  private iniciarForm() {
    this.nuevoEvento = this.formBuilder.group({
      tipoEvento: ['', Validators.required],
      descripcion: [''],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      horario: ['', Validators.required]
    })
  }

  public cancelar() {
    this.dialogRef.close();
  }

  crearEvento() {
    let evento = this.nuevoEvento.value;
    const [hours, minutes] = evento.horario.split(':');
    const fechaInicioDate = new Date(evento.fechaInicio);
    fechaInicioDate.setHours(parseInt(hours, 10)-3);
    fechaInicioDate.setMinutes(parseInt(minutes, 10));
    evento.fechaInicio = fechaInicioDate.toISOString();

    const fechaFinDate = new Date(evento.fechaFin);
    fechaFinDate.setHours(parseInt(hours, 10)-3);
    fechaFinDate.setMinutes(parseInt(minutes, 10));
    evento.fechaFin = fechaFinDate.toISOString();
    this.httpService.realizarPost(this.url.addEvento, evento).subscribe((data: any) => {
      if (data.state == 'OK') {
        this.dialogRef.close();
      }
    });
  }
  
}
