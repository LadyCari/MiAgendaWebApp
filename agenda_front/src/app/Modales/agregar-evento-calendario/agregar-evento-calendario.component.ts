import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/app/Servicios/http.service';
import { Url } from 'src/app/url';

@Component({
  selector: 'app-agregar-evento-calendario',
  templateUrl: './agregar-evento-calendario.component.html',
  styleUrls: ['./agregar-evento-calendario.component.css']
})
export class AgregarEventoCalendarioComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  nuevoEvento: FormGroup = this.formBuilder.group({});
  readonly url = Url;
  diasSeleccionados: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AgregarEventoCalendarioComponent>,
    private httpService: HttpService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.iniciarForm();
  }

  private iniciarForm() {
    this.nuevoEvento = this.formBuilder.group({
      tipoEvento: ['', Validators.required],
      descripcionEvento: [''],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      horaEvento: ['', Validators.required]
    })
  }

  public cancelar() {
    this.dialogRef.close();
  }

  public putsEvento() {
    let nuevoEvento = this.nuevoEvento.value;

    if (nuevoEvento.fechaInicio) {
      nuevoEvento.fechaInicio = new Date(nuevoEvento.fechaInicio).toISOString().split('T')[0];
    }
    if (nuevoEvento.fechaFin) {
      nuevoEvento.fechaFin = new Date(nuevoEvento.fechaFin).toISOString().split('T')[0];
    }
    console.log(nuevoEvento)
    this.httpService.realizarPost(this.url.postEventoCalendario, nuevoEvento).subscribe((data: any) => {
      if (data.state == 'OK') {
        this.dialogRef.close(data.data);
      }
    });
  }

}
