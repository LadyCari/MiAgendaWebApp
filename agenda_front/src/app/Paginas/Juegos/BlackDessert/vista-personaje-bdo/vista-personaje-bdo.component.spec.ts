import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPersonajeBdoComponent } from './vista-personaje-bdo.component';

describe('VistaPersonajeBdoComponent', () => {
  let component: VistaPersonajeBdoComponent;
  let fixture: ComponentFixture<VistaPersonajeBdoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaPersonajeBdoComponent]
    });
    fixture = TestBed.createComponent(VistaPersonajeBdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
