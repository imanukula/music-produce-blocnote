import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

import { Song } from '../../models/song.model';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  songs: Song[] = [];
  constructor() {
    this.getAll();
  }

  save(song: Song){
      firebase.database().ref('/songs').set(song);
  }

  getAll() {
    firebase.database().ref('/songs')
      .on('value', (data: DataSnapshot) => {
        this.songs = data.val() ? data.val() : [];
      }
      );
  }
}
