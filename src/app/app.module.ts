import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EltiempoComponent } from './eltiempo/eltiempo.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { FirstLetterUppercasePipe } from './first-letter-uppercase.pipe';
// import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localeEs, 'es');


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    EltiempoComponent,
    AcercadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    FirstLetterUppercasePipe

    // HttpClientModule
  ],
  providers: [
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'es' }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
