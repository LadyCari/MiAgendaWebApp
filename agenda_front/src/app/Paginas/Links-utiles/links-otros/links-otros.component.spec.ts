import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksOtrosComponent } from './links-otros.component';

describe('LinksOtrosComponent', () => {
  let component: LinksOtrosComponent;
  let fixture: ComponentFixture<LinksOtrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinksOtrosComponent]
    });
    fixture = TestBed.createComponent(LinksOtrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
