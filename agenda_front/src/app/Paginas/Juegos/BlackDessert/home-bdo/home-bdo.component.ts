import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ModalCargarPjComponent } from 'src/app/Modales/modal-cargar-pj/modal-cargar-pj.component';
import { HttpService } from 'src/app/Servicios/http.service';
import { Url } from 'src/app/url';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-home-bdo',
  templateUrl: './home-bdo.component.html',
  styleUrls: ['./home-bdo.component.css']
})

export class HomeBdoComponent implements OnInit {

  readonly url = Url;
  listaPjsVistaPrevia: any;

  constructor(private httpService: HttpService, private dialog: MatDialog, private sanitizer: DomSanitizer, private router: Router) {
  }

  displayedColumns: string[] = ['Nombre', 'Clase', 'Inventario', 'Chenga', 'armaPrincipal', 'armaSecundaria', 'armaDespertar'];

  ngOnInit(): void {
    this.getVistaPreviaPjs();
  }

  private getVistaPreviaPjs() {
    this.httpService.realizarGet(this.url.getPersonajesVistaPrevia).subscribe((data: any) => {
      if (data.state == 'OK') {
        this.listaPjsVistaPrevia = data.data;
        this.listaPjsVistaPrevia.forEach((personaje: any) => {
          personaje.foto = this.getImagenSrc(personaje.foto);
        });
      }
    });
}

public crearPersonaje(){
  this.dialog.open(ModalCargarPjComponent, {
    height: 'auto',
    width: 'auto',
  });
}

getImagenSrc(base64Data: string): string {
  if (base64Data) {
    return `data:image/jpeg;base64,${base64Data}`;
  }
  return '';
}

public detallePjBdo (id: number){
this.router.navigate(['/vista-personaje-bdo/' + id]);
}

}
