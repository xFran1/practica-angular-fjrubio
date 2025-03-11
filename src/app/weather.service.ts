// src/app/weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'a01e3eba82e2424a9fc221813251003';
  private apiUrl = 'http://api.weatherapi.com/v1/forecast.json';
  
  constructor(private http: HttpClient) { }

  getWeatherForecast(city: string, days: number = 7): Observable<any> { // Renombrado y añadido días
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${city}&days=${days}&aqi=no`;
    return this.http.get(url);
  }
}