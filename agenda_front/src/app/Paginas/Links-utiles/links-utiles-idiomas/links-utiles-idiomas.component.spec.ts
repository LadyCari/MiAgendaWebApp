import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksUtilesIdiomasComponent } from './links-utiles-idiomas.component';

describe('LinksUtilesIdiomasComponent', () => {
  let component: LinksUtilesIdiomasComponent;
  let fixture: ComponentFixture<LinksUtilesIdiomasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinksUtilesIdiomasComponent]
    });
    fixture = TestBed.createComponent(LinksUtilesIdiomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
