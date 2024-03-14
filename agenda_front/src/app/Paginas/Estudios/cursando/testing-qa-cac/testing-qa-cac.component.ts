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

  public moverse(idElementoPagina: any){
    const idelement = document.getElementById(idElementoPagina);
    if(idelement){
      idelement.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }

}
