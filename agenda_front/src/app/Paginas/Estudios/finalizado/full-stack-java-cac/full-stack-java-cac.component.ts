import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-full-stack-java-cac',
  templateUrl: './full-stack-java-cac.component.html',
  styleUrls: ['./full-stack-java-cac.component.css']
})
export class FullStackJavaCacComponent {

  
  constructor(private viewportScroller: ViewportScroller){

  }

  public moverse(idElementoPagina: string): void {
    console.log("entra");
    this.viewportScroller.scrollToAnchor(idElementoPagina);
  }
  
}
