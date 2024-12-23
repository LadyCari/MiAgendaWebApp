import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-otro-personajes',
  templateUrl: './otro-personajes.component.html',
  styleUrls: ['./otro-personajes.component.css']
})
export class OtroPersonajesComponent {

  rotationAngle = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.rotationAngle = scrollPosition % 360; // Ajusta este valor para cambiar la velocidad de rotación
    }
}
