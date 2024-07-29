import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLifeRecoleccionComponent } from './modal-life-recoleccion.component';

describe('ModalLifeRecoleccionComponent', () => {
  let component: ModalLifeRecoleccionComponent;
  let fixture: ComponentFixture<ModalLifeRecoleccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalLifeRecoleccionComponent]
    });
    fixture = TestBed.createComponent(ModalLifeRecoleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
