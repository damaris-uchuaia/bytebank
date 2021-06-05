import { NovaTransferenciaComponent } from './nova-tranferencia/nova-transferencia.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Output } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
