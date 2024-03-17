import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksUtilesEstudiosGeneralesComponent } from './links-utiles-estudios-generales.component';

describe('LinksUtilesEstudiosGeneralesComponent', () => {
  let component: LinksUtilesEstudiosGeneralesComponent;
  let fixture: ComponentFixture<LinksUtilesEstudiosGeneralesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinksUtilesEstudiosGeneralesComponent]
    });
    fixture = TestBed.createComponent(LinksUtilesEstudiosGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
