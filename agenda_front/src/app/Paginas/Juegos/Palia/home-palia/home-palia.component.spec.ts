import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePaliaComponent } from './home-palia.component';

describe('HomePaliaComponent', () => {
  let component: HomePaliaComponent;
  let fixture: ComponentFixture<HomePaliaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePaliaComponent]
    });
    fixture = TestBed.createComponent(HomePaliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
