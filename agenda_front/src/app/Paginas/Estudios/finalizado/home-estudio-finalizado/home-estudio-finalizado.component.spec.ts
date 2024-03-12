import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEstudioFinalizadoComponent } from './home-estudio-finalizado.component';

describe('HomeEstudioFinalizadoComponent', () => {
  let component: HomeEstudioFinalizadoComponent;
  let fixture: ComponentFixture<HomeEstudioFinalizadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeEstudioFinalizadoComponent]
    });
    fixture = TestBed.createComponent(HomeEstudioFinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
