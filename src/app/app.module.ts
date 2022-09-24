import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TwitchAuthComponent } from './twitch-auth/twitch-auth.component';
import { SamComponent } from './sam/sam.component';
import { SamLogsComponent } from './sam-logs/sam-logs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TwitchAuthComponent,
    SamComponent,
    SamLogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
