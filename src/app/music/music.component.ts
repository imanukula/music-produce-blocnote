import { Component, OnInit } from '@angular/core';
import { MusicService } from '../shared/services/music/music.service';

import { Song } from '../shared/models/song.model';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.sass']
})
export class MusicComponent implements OnInit {

  songs: Song[];

  constructor(private musicService: MusicService) { }

  ngOnInit(): void {
  }

}
