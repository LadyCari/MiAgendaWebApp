import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksUtilesJuegosComponent } from './links-utiles-juegos.component';

describe('LinksUtilesJuegosComponent', () => {
  let component: LinksUtilesJuegosComponent;
  let fixture: ComponentFixture<LinksUtilesJuegosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinksUtilesJuegosComponent]
    });
    fixture = TestBed.createComponent(LinksUtilesJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
