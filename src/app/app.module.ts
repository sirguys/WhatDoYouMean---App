import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { MusicPlayerComponent } from './music-player/music-player.component';


export const firebaseConfig = {
    apiKey: "AIzaSyAb5hCL3lM9Kr505XwFRqyPnGbGXKJrVRg",
    authDomain: "what-do-you-mean.firebaseapp.com",
    databaseURL: "https://what-do-you-mean.firebaseio.com",
    projectId: "what-do-you-mean",
    storageBucket: "",
    messagingSenderId: "1051811769175"
};

@NgModule({
  declarations: [
    AppComponent,
    TestcomponentComponent,
    MusicPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
