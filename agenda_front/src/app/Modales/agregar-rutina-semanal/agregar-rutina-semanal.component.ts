import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Url } from 'src/app/url';
import { HttpService } from 'src/app/Servicios/http.service';

@Component({
  selector: 'app-agregar-rutina-semanal',
  templateUrl: './agregar-rutina-semanal.component.html',
  styleUrls: ['./agregar-rutina-semanal.component.css']
})
export class AgregarRutinaSemanalComponent implements OnInit {

  rutinaSemana: FormGroup = this.formBuilder.group({});
  readonly url = Url;
  diasSemana: string[] = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
  diasSeleccionados: any[] = [];
  
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AgregarRutinaSemanalComponent>, @Inject(MAT_DIALOG_DATA)
    public data: any,
    private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.iniciarForm();
  }

  private iniciarForm() {
    this.rutinaSemana = this.formBuilder.group({
      nombre: ['', Validators.required],
      horarioInicio: ['', Validators.required],
      horarioFin: ['', Validators.required],
      dia: [[], Validators.required]
    })
  }

  public checkBox(dia: string) {
    if (!this.existe(dia)) {
      this.diasSeleccionados.push(dia);
    } else {
      const index = this.diasSeleccionados.findIndex((control: { value: string; }) => control.value === dia);
      if (index !== -1) {
        this.diasSeleccionados.splice(index, 1);
      }
    }
  }

  private existe(dia: string) {
    for (let cosa of this.diasSeleccionados) {
      if (cosa == dia) {
        return true;
      }

    }
    return false;
  }

  public cancelar() {
    this.dialogRef.close();
  }

  public putsRutina() {
    let nuevarutina = this.rutinaSemana.value;
    nuevarutina.dia = this.diasSeleccionados;
    this.httpService.realizarPost(this.url.addActividad, nuevarutina).subscribe((data: any) => {
      if (data.state == 'OK') {
        this.dialogRef.close();
      }
    });
  }

}

