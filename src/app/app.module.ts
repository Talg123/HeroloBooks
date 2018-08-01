import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ApiService } from '../services/api.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import {HttpModule} from '@angular/http';
import { CardBookComponent } from './main-page/card-book/card-book.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CardBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
