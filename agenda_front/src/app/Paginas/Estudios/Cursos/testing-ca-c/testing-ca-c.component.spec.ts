import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingCaCComponent } from './testing-ca-c.component';

describe('TestingCaCComponent', () => {
  let component: TestingCaCComponent;
  let fixture: ComponentFixture<TestingCaCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestingCaCComponent]
    });
    fixture = TestBed.createComponent(TestingCaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
