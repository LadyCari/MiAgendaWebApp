import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModalCargarPjComponent } from 'src/app/Modales/modal-cargar-pj/modal-cargar-pj.component';
import { HttpService } from 'src/app/Servicios/http.service';
import { Url } from 'src/app/url';

@Component({
  selector: 'app-vista-personaje-bdo',
  templateUrl: './vista-personaje-bdo.component.html',
  styleUrls: ['./vista-personaje-bdo.component.css']
})

export class VistaPersonajeBdoComponent implements OnInit{

readonly url = Url;
personaje: any;

constructor(private route: ActivatedRoute, private httpService: HttpService, private dialog: MatDialog){
}

ngOnInit() {
  // Recuperar la ID de la URL
  const id = this.route.snapshot.paramMap.get('id');
  this.informacionPj(id);
  // Utilizar la ID como necesites
  console.log('ID recuperada de la URL:', id);
}


public informacionPj (id: any){
  this.personaje = this.httpService.realizarGet(this.url.getInfoPersonaje + id).subscribe((data: any) => {
    if (data.state = 'OK'){
      this.personaje = data.data;
      this.personaje.foto =  this.getImagenSrc(this.personaje.foto);
      this.personaje.fotoSet = this.getImagenSrc(this.personaje.fotoSet);
    }
  })
}

getImagenSrc(base64Data: string): string {
  if (base64Data) {
    return `data:image/jpeg;base64,${base64Data}`;
  }
  return '';
}

public editarPj(){
  this.dialog.open(ModalCargarPjComponent,{
    height: 'auto',
    width: 'auto',
    data: this.personaje,
  });
}
}
