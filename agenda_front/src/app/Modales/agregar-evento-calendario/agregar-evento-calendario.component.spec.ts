import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEventoCalendarioComponent } from './agregar-evento-calendario.component';

describe('AgregarEventoCalendarioComponent', () => {
  let component: AgregarEventoCalendarioComponent;
  let fixture: ComponentFixture<AgregarEventoCalendarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarEventoCalendarioComponent]
    });
    fixture = TestBed.createComponent(AgregarEventoCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
