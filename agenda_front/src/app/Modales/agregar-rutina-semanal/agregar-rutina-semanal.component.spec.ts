import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRutinaSemanalComponent } from './agregar-rutina-semanal.component';

describe('AgregarRutinaSemanalComponent', () => {
  let component: AgregarRutinaSemanalComponent;
  let fixture: ComponentFixture<AgregarRutinaSemanalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarRutinaSemanalComponent]
    });
    fixture = TestBed.createComponent(AgregarRutinaSemanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
