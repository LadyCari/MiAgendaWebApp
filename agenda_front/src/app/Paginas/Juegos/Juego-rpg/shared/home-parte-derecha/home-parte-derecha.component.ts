import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Servicios/http.service';
import { Url } from 'src/app/url';

@Component({
  selector: 'app-home-parte-derecha',
  templateUrl: './home-parte-derecha.component.html',
  styleUrls: ['./home-parte-derecha.component.css']
})
export class HomeParteDerechaComponent implements OnInit {

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.obtenerLifes();
    this.obtenerMascotasActivas();
  }

  /* ------ constantes ------*/

  readonly url = Url;
  listaLifes: any[] = [];
  listaPets: any[] = [];
  experienciaBarra = 0;

  /* ------ datos traidos ------*/

  private obtenerLifes() {
    this.httpService.realizarGet(this.url.getLifeDerechaDTO).subscribe((data: any) => {
      if (data.state == 'OK') {
        this.listaLifes = data.data;
        this.listaLifes.forEach((life: any) => {
          life.foto = this.getImagenSrc(life.foto);
        });
      }
    })
  }

  private obtenerMascotasActivas() {
    this.httpService.realizarGet(this.url.getMascotaActivaDTO).subscribe((data: any) => {
      if (data.state == 'OK') {
        this.listaPets = data.data;
        this.listaPets.forEach((pet: any) => {
          pet.foto = this.getImagenSrc(pet.foto);
        });
      }
    })
  }

  public obtenerExperiencia(experiencia: number, nivel:number) {
    return (experiencia*100)/(25*nivel);
  }

  /* ------ otras funciones ------*/

  getImagenSrc(base64Data: string): string {
    if (base64Data) {
      return `data:image/png;base64,${base64Data}`;
    }
    return '';
  }

}


