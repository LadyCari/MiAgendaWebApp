import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksUtilesGeneralComponent } from './links-utiles-general.component';

describe('LinksUtilesGeneralComponent', () => {
  let component: LinksUtilesGeneralComponent;
  let fixture: ComponentFixture<LinksUtilesGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinksUtilesGeneralComponent]
    });
    fixture = TestBed.createComponent(LinksUtilesGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
