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

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<AgregarRutinaSemanalComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.iniciarForm();
  }

  private iniciarForm() {
    this.rutinaSemana = this.formBuilder.group({
      nombre: ['', Validators.required],
      dia: [[], Validators.required],
      horario: ['', Validators.required]
    })
  }

  public cancelar() {
    this.dialogRef.close();
  }

  public putsRutina() {
    let nuevarutina = this.rutinaSemana.value;
    this.httpService.realizarPost(this.url.addActividad, nuevarutina).subscribe((data: any) => {
      if (data.state == 'OK') {
        this.dialogRef.close();
      }
    });
  }
}
