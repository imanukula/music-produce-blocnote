import { BrowserModule } from '@angular/platform-browser';
import { AppRouting } from './app.routing';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MusicComponent } from './music/music.component';
import * as firebase from 'firebase';

@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBf3mROid3koP1HKilUpCO_a1QEePel_Ko',
      authDomain: 'music-produce-blocnote.firebaseapp.com',
      databaseURL: 'https://music-produce-blocnote.firebaseio.com',
      projectId: 'music-produce-blocnote',
      storageBucket: 'music-produce-blocnote.appspot.com',
      messagingSenderId: '873579014643',
      appId: '1:873579014643:web:dd05d09a9440dde77c8a86',
      measurementId: 'G-JGZXEMQG2B'
    };
    firebase.initializeApp(firebaseConfig);
  } }
