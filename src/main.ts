// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; 
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { importProvidersFrom } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import 'bootstrap'; 


registerLocaleData(localeEs, 'es');


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient() ,
    { provide: LOCALE_ID, useValue: 'es' },
    
    // Configurar español como idioma por defecto

  ],
  
 
  

})
  .catch(err => console.error(err));