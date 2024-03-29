import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/app/Servicios/http.service';
import { ModalLinkComponent } from '../modal-link/modal-link.component';

@Component({
  selector: 'app-agregar-evento-calendario',
  templateUrl: './agregar-evento-calendario.component.html',
  styleUrls: ['./agregar-evento-calendario.component.css']
})
export class AgregarEventoCalendarioComponent implements OnInit{

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
      tipo: ['', Validators.required],
      descripcion: [''],
      Fecha: ['', Validators.required],
      horario: ['', Validators.required]
    })
  }

  public cancelar() {
    this.dialogRef.close();
  }
  
}
