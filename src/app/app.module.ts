import { BrowserModule } from '@angular/platform-browser';
import { AppRouting } from './app.routing';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MusicComponent } from './music/music.component';

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
export class AppModule { }
