import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/Servicios/http.service';
import { Url } from 'src/app/url';

@Component({
  selector: 'app-panel-adm',
  templateUrl: './panel-adm.component.html',
  styleUrls: ['./panel-adm.component.css']
})
export class PanelAdmComponent implements OnInit {

  selectedFile: any;
  selectedFileUrl: string | ArrayBuffer | null = null;

  constructor(
    private httpService: HttpService,
    private formBuilder: FormBuilder, public dialogRef: MatDialogRef<PanelAdmComponent>) { }

  ngOnInit(): void {
    this.iniciarFormLife();
    this.iniciarFormPet();
  }

  readonly url = Url;
  formLife: FormGroup = this.formBuilder.group({});
  formPet: FormGroup = this.formBuilder.group({});

  private iniciarFormLife() {
    this.formLife = this.formBuilder.group({
      nombre: [''],
      nivel: [''],
      experienciaActual: [''],
      imagen: ['']
    })
  }

  crearLife() {
    let lifeCreada = this.formLife.value;
  
    // Agregar la imagen convertida en byte[]
    lifeCreada.imagen = this.selectedFile;
  
    this.httpService.realizarPost(this.url.crearLife, lifeCreada).subscribe((data: any) => {
      if (data.state == 'OK') {
        this.dialogRef.close();
      }
    });
  }
  


  onFileSelected(event: any) {
    const file = event.target.files[0];
    
    // Verifica si se seleccionó un archivo
    if (file) {
      const reader = new FileReader();
      
      reader.onload = () => {
        this.selectedFile = reader.result?.toString().split(',')[1]; // Esto obtiene solo la parte base64, eliminando el encabezado
      };
  
      reader.readAsDataURL(file);
    }
  }
  
  crearPet() {
    let petCreada = this.formPet.value;
  
    // Agregar la imagen convertida en byte[]
    petCreada.imagen = this.selectedFile;
    console.log(petCreada)
    this.httpService.realizarPost(this.url.crearPet, petCreada).subscribe((data: any) => {
      if (data.state == 'OK') {
        this.dialogRef.close();
      }
    });
  }
  
  private iniciarFormPet() {
    this.formPet = this.formBuilder.group({
      nombre: [''],
      imagen: [''],
      activa: [false]
    })
  }

}
