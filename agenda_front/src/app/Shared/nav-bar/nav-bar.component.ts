import { Component, OnInit } from '@angular/core';
import { ModoOscuroService } from 'src/app/Servicios/modoOscuro/modo-oscuro.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private modoOscuro: ModoOscuroService) {
  }

  ngOnInit(): void {
    this.modoOscuro.modoNoche$.subscribe(value => {
      this.noche = value;
    });
  }

  noche: boolean = false;

}
