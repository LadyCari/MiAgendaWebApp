import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeParteDerechaComponent } from './home-parte-derecha.component';

describe('HomeParteDerechaComponent', () => {
  let component: HomeParteDerechaComponent;
  let fixture: ComponentFixture<HomeParteDerechaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeParteDerechaComponent]
    });
    fixture = TestBed.createComponent(HomeParteDerechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
