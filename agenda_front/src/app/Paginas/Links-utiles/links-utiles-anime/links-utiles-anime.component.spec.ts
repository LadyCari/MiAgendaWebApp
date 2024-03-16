import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksUtilesAnimeComponent } from './links-utiles-anime.component';

describe('LinksUtilesAnimeComponent', () => {
  let component: LinksUtilesAnimeComponent;
  let fixture: ComponentFixture<LinksUtilesAnimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinksUtilesAnimeComponent]
    });
    fixture = TestBed.createComponent(LinksUtilesAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
