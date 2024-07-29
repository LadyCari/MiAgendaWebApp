import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtroRecetasComponent } from './otro-recetas.component';

describe('OtroRecetasComponent', () => {
  let component: OtroRecetasComponent;
  let fixture: ComponentFixture<OtroRecetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtroRecetasComponent]
    });
    fixture = TestBed.createComponent(OtroRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
