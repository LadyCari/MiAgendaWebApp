import { Component, OnInit } from '@angular/core';
import { ModoOscuroService } from 'src/app/Servicios/modoOscuro/modo-oscuro.service';

@Component({
  selector: 'app-home-juego-rpg',
  templateUrl: './home-juego-rpg.component.html',
  styleUrls: ['./home-juego-rpg.component.css']
})
export class HomeJuegoRpgComponent implements OnInit {

  constructor(private modoNoche: ModoOscuroService) {
  }

  noche: boolean = false;

  ngOnInit(): void {
    this.modoNoche.modoNoche$.subscribe(value => {
      this.noche = value;
    });
  }

}
