import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCargarPjComponent } from './modal-cargar-pj.component';

describe('ModalCargarPjComponent', () => {
  let component: ModalCargarPjComponent;
  let fixture: ComponentFixture<ModalCargarPjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCargarPjComponent]
    });
    fixture = TestBed.createComponent(ModalCargarPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
