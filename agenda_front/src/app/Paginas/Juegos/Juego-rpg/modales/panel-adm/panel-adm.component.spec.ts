import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAdmComponent } from './panel-adm.component';

describe('PanelAdmComponent', () => {
  let component: PanelAdmComponent;
  let fixture: ComponentFixture<PanelAdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelAdmComponent]
    });
    fixture = TestBed.createComponent(PanelAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
