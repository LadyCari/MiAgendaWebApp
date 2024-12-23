import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtroPersonajesComponent } from './otro-personajes.component';

describe('OtroPersonajesComponent', () => {
  let component: OtroPersonajesComponent;
  let fixture: ComponentFixture<OtroPersonajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtroPersonajesComponent]
    });
    fixture = TestBed.createComponent(OtroPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
