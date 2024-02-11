import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalCargarPjComponent } from 'src/app/Modales/modal-cargar-pj/modal-cargar-pj.component';
import { HttpService } from 'src/app/Servicios/http.service';
import { Url } from 'src/app/url';

@Component({
  selector: 'app-home-bdo',
  templateUrl: './home-bdo.component.html',
  styleUrls: ['./home-bdo.component.css']
})

export class HomeBdoComponent implements OnInit {

  readonly url = Url;
  listaPjsVistaPrevia: any;

  constructor(private httpService: HttpService, private dialog: MatDialog, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.getVistaPreviaPjs();
  }

  private getVistaPreviaPjs() {
    this.httpService.realizarGet(this.url.getPersonajesVistaPrevia).subscribe((data: any) => {
      if (data.state == 'OK') {
        this.listaPjsVistaPrevia = data.data;
        console.log(data);
        this.listaPjsVistaPrevia.forEach((personaje: any) => {
          this.extraerBase64(personaje.foto);
        });
      }
    })
  }

public crearPersonaje(){
  this.dialog.open(ModalCargarPjComponent, {
    height: 'auto',
    width: 'auto',
  });
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
      });
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
