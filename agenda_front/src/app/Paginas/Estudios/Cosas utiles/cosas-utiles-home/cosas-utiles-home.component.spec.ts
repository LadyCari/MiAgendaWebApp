import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosasUtilesHomeComponent } from './cosas-utiles-home.component';

describe('CosasUtilesHomeComponent', () => {
  let component: CosasUtilesHomeComponent;
  let fixture: ComponentFixture<CosasUtilesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CosasUtilesHomeComponent]
    });
    fixture = TestBed.createComponent(CosasUtilesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
