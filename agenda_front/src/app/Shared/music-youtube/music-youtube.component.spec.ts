import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicYoutubeComponent } from './music-youtube.component';

describe('MusicYoutubeComponent', () => {
  let component: MusicYoutubeComponent;
  let fixture: ComponentFixture<MusicYoutubeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicYoutubeComponent]
    });
    fixture = TestBed.createComponent(MusicYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
