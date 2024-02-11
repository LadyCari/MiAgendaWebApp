import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBdoComponent } from './home-bdo.component';

describe('HomeBdoComponent', () => {
  let component: HomeBdoComponent;
  let fixture: ComponentFixture<HomeBdoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBdoComponent]
    });
    fixture = TestBed.createComponent(HomeBdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
