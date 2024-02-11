import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpService } from 'src/app/Servicios/http.service';
import { Url } from 'src/app/url';

@Component({
  selector: 'app-modal-cargar-pj',
  templateUrl: './modal-cargar-pj.component.html',
  styleUrls: ['./modal-cargar-pj.component.css']
})
export class ModalCargarPjComponent implements OnInit{

  formNuevoPersonaje: FormGroup = this.formBuilder.group({});
  pag = 1;
  readonly url = Url;
  listaClasesPjs: any;
  previsualizar: any;

  constructor(private httpService: HttpService, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<ModalCargarPjComponent>, private sanitizer: DomSanitizer){
  }

  ngOnInit(): void {
    this.getClases();
    this.iniciarFormularioNuevoPj();
  }

  private iniciarFormularioNuevoPj(){
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

  public validarFinalizar(){
    return this.formNuevoPersonaje.valid
  }

  private getClases() {
    this.httpService.realizarGet(this.url.getClasesPjs).subscribe((data: any) => {
      if (data.state == 'OK') {
        this.listaClasesPjs = data.data;
        console.log(data);
      }
    })
  }

  seleccionarPaso(pagina:number){
    this.pag = pagina;
    console.log(this.pag);
  }
  
  crearPersonaje(){
    const personajeCreado = this.formNuevoPersonaje.value;
    console.log(personajeCreado);
    this.httpService.realizarPost(this.url.postNuevoPj, personajeCreado).subscribe((data: any) => {
      if(data.state == 'OK'){
        this.dialogRef.close();
      }
    })
  }

  public cancelar(){
    this.dialogRef.close();
  }

  capturarFile(event: any, foto: any): any {
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      (this.formNuevoPersonaje.get(foto) as FormControl).setValue(imagen.base);
console.log(imagen.base);
console.log(this.formNuevoPersonaje.get(foto)?.value);
    })

  }
  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
          
        });this.previsualizar = reader.result
      };
      reader.onerror = error => {
        reject(error); // Rechaza la promesa en caso de error de lectura
      };
    } catch (e) {
      reject(e); // Rechaza la promesa en caso de cualquier otro error
    }
    // Retorna null si ocurre algún error
    return null;
  });
  
}
