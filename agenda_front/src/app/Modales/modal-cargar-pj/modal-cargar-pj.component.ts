import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpService } from 'src/app/Servicios/http.service';
import { Url } from 'src/app/url';

@Component({
  selector: 'app-modal-cargar-pj',
  templateUrl: './modal-cargar-pj.component.html',
  styleUrls: ['./modal-cargar-pj.component.css']
})
export class ModalCargarPjComponent implements OnInit {

  formNuevoPersonaje: FormGroup = this.formBuilder.group({});
  pag = 1;
  readonly url = Url;
  listaClasesPjs: any;
  previsualizar: any;
  personajeEditable: any;
  esEdicion = false;

  constructor(private httpService: HttpService, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<ModalCargarPjComponent>, private sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.getClases();
    this.iniciarFormularioNuevoPj();
    console.log(this.data);
    if(this.data != null)
      this.dataToFormularioDeEditarPj()
  }

  private iniciarFormularioNuevoPj() {
    this.formNuevoPersonaje = this.formBuilder.group({
      nombre: ['', Validators.required],
      idClase: ['', Validators.required],
      objetivo: ['', Validators.required],
      temporada: [false],
      inventario: [false],
      chenga: [false],
      casco: [false],
      guante: [false],
      zapato: [false],
      pechera: [false],
      anillo1: [false],
      anillo2: [false],
      arete1: [false],
      arete2: [false],
      cinturon: [false],
      collar: [false],
      armaPrincipal: [false],
      armaSecundaria: [false],
      armaDespertar: [false],
      foto: [''],
      fotoSet: ['']
    })
  }

  public validarFinalizar() {
    return this.formNuevoPersonaje.valid
  }

  private getClases() {
    this.httpService.realizarGet(this.url.getClasesPjs).subscribe((data: any) => {
      if (data.state == 'OK') {
        this.listaClasesPjs = data.data;
      }
    })
  }

  seleccionarPaso(pagina: number) {
    this.pag = pagina;
  }

  crearPersonaje() {
    const personajeCreado = this.formNuevoPersonaje.value;
    console.log(personajeCreado);
    if(!this.esEdicion){
      this.httpService.realizarPost(this.url.postNuevoPj, personajeCreado).subscribe((data: any) => {
        if (data.state == 'OK') {
          this.dialogRef.close();
        }
      })
    }else {/*
      this.httpService.realizarPut(this.url.editarPJ, personajeCreado).subscribe((data: any) => {
        if (data.state == 'OK') {
          this.dialogRef.close();
        }
      })*/
    }
  }

  public cancelar() {
    this.dialogRef.close();
  }

  capturarFile(event: any, foto: any): any {
    const archivoCapturado = event.target.files[0]
    this.fileToByteArray(archivoCapturado).then((imagen: any) => {
      (this.formNuevoPersonaje.get(foto) as FormControl).setValue(imagen.base);
    })

  }
  fileToByteArray(file: File): Promise<{ base: string, type: string }> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onloadend = () => {
        const base64String = reader.result as string;
        const separatorIndex = base64String.indexOf('/9j/');
        
        if (separatorIndex !== -1) {
          const base64Data = base64String.substring(separatorIndex);
          const type = base64String.substring(5, separatorIndex); // Considerando que el tipo MIME siempre estará antes de la base64
        
          resolve({ base: base64Data, type: type });
        } else {
          reject("No se encontró el separador '/9j/' en la cadena base64.");
        }
      };
  
      reader.onerror = (error) => {
        reject(error);
      };
  
      reader.readAsDataURL(file);
    });
  }

  private dataToFormularioDeEditarPj(): void {
    const pj = this.data;
    this.formNuevoPersonaje.setValue({
      nombre: pj.nombre,
      idClase: pj.idClase,
      objetivo: pj.objetivo,
      temporada: pj.temporada,
      inventario: pj.inventario,
      chenga: pj.chenga,
      casco: pj.casco,
      guante: pj.guante,
      zapato: pj.zapato,
      pechera: pj.pechera,
      anillo1: pj.anillo1,
      anillo2: pj.anillo2,
      arete1: pj.arete1,
      arete2: pj.arete2,
      cinturon: pj.cinturon,
      collar: pj.collar,
      armaPrincipal: pj.armaPrincipal,
      armaSecundaria: pj.armaSecundaria,
      armaDespertar: pj.armaDespertar,
      foto: null,
      fotoSet: null
    });
    this.esEdicion = true;
  }
  
  
}
