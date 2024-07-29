import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaLagoComponent } from './mapa-lago.component';

describe('MapaLagoComponent', () => {
  let component: MapaLagoComponent;
  let fixture: ComponentFixture<MapaLagoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapaLagoComponent]
    });
    fixture = TestBed.createComponent(MapaLagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
