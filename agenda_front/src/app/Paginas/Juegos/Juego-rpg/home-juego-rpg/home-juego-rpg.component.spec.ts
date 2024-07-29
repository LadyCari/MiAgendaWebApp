import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeJuegoRpgComponent } from './home-juego-rpg.component';

describe('HomeJuegoRpgComponent', () => {
  let component: HomeJuegoRpgComponent;
  let fixture: ComponentFixture<HomeJuegoRpgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeJuegoRpgComponent]
    });
    fixture = TestBed.createComponent(HomeJuegoRpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
