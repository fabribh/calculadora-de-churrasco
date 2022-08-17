import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploUmComponent } from './exemplo-um/exemplo-um.component';
import { ExemploDoisComponent } from './exemplo-dois/exemplo-dois.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemploUmComponent,
    ExemploDoisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
