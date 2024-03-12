import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullStackJavaCacComponent } from './full-stack-java-cac.component';

describe('FullStackJavaCacComponent', () => {
  let component: FullStackJavaCacComponent;
  let fixture: ComponentFixture<FullStackJavaCacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullStackJavaCacComponent]
    });
    fixture = TestBed.createComponent(FullStackJavaCacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
