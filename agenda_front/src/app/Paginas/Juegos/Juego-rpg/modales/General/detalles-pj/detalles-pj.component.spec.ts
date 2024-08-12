import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPjComponent } from './detalles-pj.component';

describe('DetallesPjComponent', () => {
  let component: DetallesPjComponent;
  let fixture: ComponentFixture<DetallesPjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesPjComponent]
    });
    fixture = TestBed.createComponent(DetallesPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
