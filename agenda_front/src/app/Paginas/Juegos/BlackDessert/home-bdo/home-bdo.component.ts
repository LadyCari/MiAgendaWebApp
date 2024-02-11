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
          personaje.foto = this.arrayBufferToBase64(personaje.foto);
        });
        console.log(this.listaPjsVistaPrevia);
      }
    });
}
arrayBufferToBase64(buffer: ArrayBuffer): string {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  console.log(binary)
  return 'data:image/jpeg;base64,' + btoa(binary);
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

getImagenSrc(base64Data: string): string {
  if (base64Data) {
    return `data:image/jpeg;base64,/9j/${base64Data}`;
  }
  return ''; // Si no hay datos, retorna una cadena vacía
}

}
