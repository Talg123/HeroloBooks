import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ApiService } from '../services/api.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import {HttpModule} from '@angular/http';
import { CardBookComponent } from './main-page/card-book/card-book.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldControl, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule,
  MAT_DATE_LOCALE, 
  MatIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Notification} from '../services/notification.service';
import * as $ from 'jquery';
import { CleantitlePipe } from '../pipes/cleantitle.pipe';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component'

  

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CardBookComponent,
    ModalComponent,
    CleantitlePipe,
    ModalDeleteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,MatIconModule
  ],
  providers: [ApiService,{provide: MAT_DATE_LOCALE, useValue: 'he-HE'},Notification],
  bootstrap: [AppComponent]
})
export class AppModule { }
