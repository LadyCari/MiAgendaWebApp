import { Component, OnInit } from '@angular/core';
import { ModoOscuroService } from 'src/app/Servicios/modoOscuro/modo-oscuro.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  constructor(private modoNoche: ModoOscuroService) {
  }

  ngOnInit(): void {
    this.modoNoche.modoNoche$.subscribe(value => {
      this.noche = value;
    });
  }

  noche: boolean = false;

public cambiarModo (){
  this.noche = !this.noche;
  this.modoNoche.setModo(this.noche);
}

}
