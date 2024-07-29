import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaMinaComponent } from './mapa-mina.component';

describe('MapaMinaComponent', () => {
  let component: MapaMinaComponent;
  let fixture: ComponentFixture<MapaMinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapaMinaComponent]
    });
    fixture = TestBed.createComponent(MapaMinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
