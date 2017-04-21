import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing} from './app.routing';
import { AppComponent }  from './app.component';
import { AboutComponent }  from './components/app.component';
import {UserComponent} from './components/user.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import{PostService} from './services/posts.service';

@NgModule({
  imports:      [ BrowserModule,FormsModule, HttpModule,routing ],
  declarations: [ AppComponent,UserComponent,AboutComponent ],
  providers: [PostService]
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
