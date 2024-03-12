import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLinksUtilesComponent } from './home-links-utiles.component';

describe('HomeLinksUtilesComponent', () => {
  let component: HomeLinksUtilesComponent;
  let fixture: ComponentFixture<HomeLinksUtilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeLinksUtilesComponent]
    });
    fixture = TestBed.createComponent(HomeLinksUtilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
