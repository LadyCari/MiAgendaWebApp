import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEstudioCursandoComponent } from './home-estudio-cursando.component';

describe('HomeEstudioCursandoComponent', () => {
  let component: HomeEstudioCursandoComponent;
  let fixture: ComponentFixture<HomeEstudioCursandoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeEstudioCursandoComponent]
    });
    fixture = TestBed.createComponent(HomeEstudioCursandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
