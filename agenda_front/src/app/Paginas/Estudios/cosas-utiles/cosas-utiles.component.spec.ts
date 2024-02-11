import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosasUtilesComponent } from './cosas-utiles.component';

describe('CosasUtilesComponent', () => {
  let component: CosasUtilesComponent;
  let fixture: ComponentFixture<CosasUtilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CosasUtilesComponent]
    });
    fixture = TestBed.createComponent(CosasUtilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
