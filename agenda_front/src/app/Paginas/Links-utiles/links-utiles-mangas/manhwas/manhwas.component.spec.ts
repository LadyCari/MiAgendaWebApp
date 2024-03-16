import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManhwasComponent } from './manhwas.component';

describe('ManhwasComponent', () => {
  let component: ManhwasComponent;
  let fixture: ComponentFixture<ManhwasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManhwasComponent]
    });
    fixture = TestBed.createComponent(ManhwasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
