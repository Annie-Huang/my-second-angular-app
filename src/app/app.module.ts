import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgxMaskModule} from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxMaskModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
