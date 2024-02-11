import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodoACodoComponent } from './codo-a-codo.component';

describe('CodoACodoComponent', () => {
  let component: CodoACodoComponent;
  let fixture: ComponentFixture<CodoACodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodoACodoComponent]
    });
    fixture = TestBed.createComponent(CodoACodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
