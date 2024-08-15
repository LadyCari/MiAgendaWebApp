import { Component, OnInit } from '@angular/core';

declare var YT: any;

@Component({
  selector: 'app-music-youtube',
  templateUrl: './music-youtube.component.html',
  styleUrls: ['./music-youtube.component.css']
})
export class MusicYoutubeComponent implements OnInit {

  player: any;
  currentVideoId: string = 'JOXUEZloyZE';

  constructor() { }

  ngOnInit(): void {
  }

  play(audioPlayer: HTMLAudioElement) {
    audioPlayer.play();
  }

  pause(audioPlayer: HTMLAudioElement) {
    audioPlayer.pause();
  }

  stop(audioPlayer: HTMLAudioElement) {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  }

}
