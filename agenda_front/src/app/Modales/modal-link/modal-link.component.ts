import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/Servicios/http.service';
import { Url } from 'src/app/url';

@Component({
  selector: 'app-modal-link',
  templateUrl: './modal-link.component.html',
  styleUrls: ['./modal-link.component.css']
})
export class ModalLinkComponent implements OnInit {

  readonly url = Url;
  nuevoLink: FormGroup = this.formBuilder.group({});
  esEdicion = false;

  constructor(
    private httpService: HttpService, 
    private formBuilder: FormBuilder, 
    public dialogRef: MatDialogRef<ModalLinkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.iniciarForm(this.data);
    this.dataToLink();
  }

  private iniciarForm(data: any) {
    this.nuevoLink = this.formBuilder.group({
      nombre: ['', Validators.required],
      categoria: [data.categoria || 'General', Validators.required],
      descripcion: [''],
      imagen: ['', Validators.required],
      capitulo: [''],
      url: ['', Validators.required],
      favorito: [false]
    })
  }


  public putsLink() {
    let linkCreado = this.nuevoLink.value;
    if (!this.esEdicion) {
      this.httpService.realizarPost(this.url.addLinks, linkCreado).subscribe((data: any) => {
        if (data.state == 'OK') {
          this.dialogRef.close();
        }
      })
    } else {
    linkCreado.linkId = this.data.link.linkId;
      this.httpService.realizarPut(this.url.editLinks, linkCreado).subscribe((data: any) => {
        if (data.state == 'OK') {
          this.dialogRef.close();
        }
      })
    }
  }

  private dataToLink(): void {
    const link = this.data.link;
    this.nuevoLink.setValue({
      nombre: link.nombre,
      descripcion: link.descripcion,
      imagen: link.imagen,
      url: link.url,
      capitulo: link.capitulo,
      categoria: link.categoria,
      favorito: link.favorito,
    });
    this.esEdicion = true;
  }

  public cancelar() {
    this.dialogRef.close();
  }
  
}
