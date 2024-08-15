import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraCursoComponent } from './muestra-curso.component';

describe('MuestraCursoComponent', () => {
  let component: MuestraCursoComponent;
  let fixture: ComponentFixture<MuestraCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MuestraCursoComponent]
    });
    fixture = TestBed.createComponent(MuestraCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
