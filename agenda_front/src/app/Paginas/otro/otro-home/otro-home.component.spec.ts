import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtroHomeComponent } from './otro-home.component';

describe('OtroHomeComponent', () => {
  let component: OtroHomeComponent;
  let fixture: ComponentFixture<OtroHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtroHomeComponent]
    });
    fixture = TestBed.createComponent(OtroHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
