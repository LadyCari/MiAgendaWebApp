import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingQACacComponent } from './testing-qa-cac.component';

describe('TestingQACacComponent', () => {
  let component: TestingQACacComponent;
  let fixture: ComponentFixture<TestingQACacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestingQACacComponent]
    });
    fixture = TestBed.createComponent(TestingQACacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
