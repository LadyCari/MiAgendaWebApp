import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaPuebloComponent } from './mapa-pueblo.component';

describe('MapaPuebloComponent', () => {
  let component: MapaPuebloComponent;
  let fixture: ComponentFixture<MapaPuebloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapaPuebloComponent]
    });
    fixture = TestBed.createComponent(MapaPuebloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
