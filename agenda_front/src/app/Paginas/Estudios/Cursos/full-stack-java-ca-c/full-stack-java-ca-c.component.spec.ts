import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullStackJavaCaCComponent } from './full-stack-java-ca-c.component';

describe('FullStackJavaCaCComponent', () => {
  let component: FullStackJavaCaCComponent;
  let fixture: ComponentFixture<FullStackJavaCaCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullStackJavaCaCComponent]
    });
    fixture = TestBed.createComponent(FullStackJavaCaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
