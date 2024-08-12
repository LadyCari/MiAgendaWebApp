import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeParteIzquierdaComponent } from './home-parte-izquierda.component';

describe('HomeParteIzquierdaComponent', () => {
  let component: HomeParteIzquierdaComponent;
  let fixture: ComponentFixture<HomeParteIzquierdaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeParteIzquierdaComponent]
    });
    fixture = TestBed.createComponent(HomeParteIzquierdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
