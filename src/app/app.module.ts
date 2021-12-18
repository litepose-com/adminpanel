import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharesModule } from './shares/shares.module';
import { HttpClientModule } from '@angular/common/http';
import { NebularModule } from './nebular.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharesModule,
    NebularModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
