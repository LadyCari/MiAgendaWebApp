import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModoOscuroService {

  private modoNocheSubject = new BehaviorSubject<boolean>(this.getModoFromLocalStorage());

  constructor() { }

  // Método para obtener el valor desde localStorage
  private getModoFromLocalStorage(): boolean {
    const modo = localStorage.getItem('modoOscuro');
    return (modo === 'true');
  }

  // Observable para suscribirse a los cambios
  modoNoche$ = this.modoNocheSubject.asObservable();

  // Método para cambiar el modo y notificar a todos los suscriptores
  setModo(value: boolean) {
    localStorage.setItem('modoOscuro', value.toString());
    this.modoNocheSubject.next(value); // Notifica a los suscriptores del cambio
  }

  // Método para obtener el valor actual
  getModo() {
    return this.modoNocheSubject.getValue();
  }
}
