import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testing-qa-cac',
  templateUrl: './testing-qa-cac.component.html',
  styleUrls: ['./testing-qa-cac.component.css']
})
export class TestingQACacComponent {

  constructor(private viewportScroller: ViewportScroller){

  }

  public moverse(idElementoPagina: string): void {
    console.log("entra");
    this.viewportScroller.scrollToAnchor(idElementoPagina);
  }

}
