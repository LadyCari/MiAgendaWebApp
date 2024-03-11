import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosasUtilesProgramacionComponent } from './cosas-utiles-programacion.component';

describe('CosasUtilesProgramacionComponent', () => {
  let component: CosasUtilesProgramacionComponent;
  let fixture: ComponentFixture<CosasUtilesProgramacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CosasUtilesProgramacionComponent]
    });
    fixture = TestBed.createComponent(CosasUtilesProgramacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
