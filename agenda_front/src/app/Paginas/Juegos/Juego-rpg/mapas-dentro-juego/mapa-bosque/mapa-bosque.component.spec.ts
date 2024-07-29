import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaBosqueComponent } from './mapa-bosque.component';

describe('MapaBosqueComponent', () => {
  let component: MapaBosqueComponent;
  let fixture: ComponentFixture<MapaBosqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapaBosqueComponent]
    });
    fixture = TestBed.createComponent(MapaBosqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
