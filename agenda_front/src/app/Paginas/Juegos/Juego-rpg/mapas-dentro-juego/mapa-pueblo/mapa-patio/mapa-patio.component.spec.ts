import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaPatioComponent } from './mapa-patio.component';

describe('MapaPatioComponent', () => {
  let component: MapaPatioComponent;
  let fixture: ComponentFixture<MapaPatioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapaPatioComponent]
    });
    fixture = TestBed.createComponent(MapaPatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
