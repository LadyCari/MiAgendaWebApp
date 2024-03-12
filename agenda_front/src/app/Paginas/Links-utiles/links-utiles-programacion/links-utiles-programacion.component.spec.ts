import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksUtilesProgramacionComponent } from './links-utiles-programacion.component';

describe('LinksUtilesProgramacionComponent', () => {
  let component: LinksUtilesProgramacionComponent;
  let fixture: ComponentFixture<LinksUtilesProgramacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinksUtilesProgramacionComponent]
    });
    fixture = TestBed.createComponent(LinksUtilesProgramacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
