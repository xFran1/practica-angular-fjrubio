import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent   // Declaramos AppComponent
  ],
  imports: [
    BrowserModule,   // Solo importamos BrowserModule aquí

  ],
  providers: [],
  bootstrap: [AppComponent]  // AppComponent es el que arranca la aplicación
})
export class AppModule { }
