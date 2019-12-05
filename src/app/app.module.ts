import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GpyHomeModule } from './gpy-home/gpy-home.module';
import { HeaderComponent } from './shared/header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Errorinterceptor } from 'src/helper/errorinterceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GpyHomeModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Errorinterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
