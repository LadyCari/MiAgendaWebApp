import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/Servicios/http.service';
import { Url } from 'src/app/url';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AgregarCursoComponent>,
    private httpService: HttpService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  ngOnInit(): void {
    this.iniciarForm();
  }

  nuevoCurso: FormGroup = this.formBuilder.group({});
  diasSemana: string[] = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
  diasSeleccionados: any[] = [];
  readonly url = Url;
  mapLinks: any[] = [];
  nombre: string = '';
  link: string = '';

  private iniciarForm() {
    this.nuevoCurso = this.formBuilder.group({
      nombre: ['', Validators.required],
      comision: [''],
      nombreLink:[''],
      link:[''],
      horarioInicio: ['', Validators.required],
      horarioFin: ['', Validators.required],
      linksReunion: ['', Validators.required],
      cosasImportantes: [''],
      urlLogo: ['', Validators.required],
      cursando: ['', Validators.required]
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

  agregarLink() {
    
    console.log(this.nuevoCurso.get('nombreLink')?.value, this.mapLinks)
    let dato = { nombre: this.nuevoCurso.get('nombreLink')?.value, link: this.nuevoCurso.get('link')?.value }
    this.mapLinks.push(dato);
    this.nuevoCurso.get('nombreLink')?.patchValue('');
    this.nuevoCurso.get('link')?.patchValue('');
  }

  actualizarNombre(value: string) {
    this.nombre = value;
  }

  actualizarLink(value: string) {
    this.link = value;
  }

  public postCurso() {
    let nuevoCurso = this.nuevoCurso.value;
    nuevoCurso.dia = this.diasSeleccionados;
    nuevoCurso.links = this.mapLinks;
    this.httpService.realizarPost(this.url.postDatosCurso, nuevoCurso).subscribe((data: any) => {
      if (data.state == 'OK') {
        this.dialogRef.close();
      }
    });
  }
}
