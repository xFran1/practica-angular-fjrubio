// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar esto
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Asegúrate de que FormsModule esté aquí
})
export class AppComponent implements OnInit {
  weatherForecast: any;
  city: string = 'Madrid';
  errorMessage: string | null = null;

  weatherTranslations: { [key: string]: string } = {
    "Clear": "Despejado",
    "Sunny": "Soleado",
    "Mostly clear": "Mayormente despejado",
    "Fair": "Agradable",
    "Partly cloudy": "Parcialmente nublado",
    "Cloudy": "Nublado",
    "Overcast": "Cubierto",
    "Mist": "Neblina",
    "Fog": "Niebla",
    "Freezing fog": "Niebla helada",
    "Patchy cloud": "Nubes dispersas",
    "Patchy rain possible": "Posibilidad de lluvia dispersa",
    "Patchy rain nearby": "Lluvia dispersa cerca",
    "Light rain": "Lluvia ligera",
    "Patchy light rain": "Lluvia ligera dispersa",
    "Moderate rain": "Lluvia moderada",
    "Heavy rain": "Lluvia fuerte",
    "Light drizzle": "Llovizna ligera",
    "Freezing drizzle": "Llovizna helada",
    "Heavy drizzle": "Llovizna intensa",
    "Torrential rain shower": "Chubasco torrencial",
    "Rain shower": "Chubasco",
    "Patchy light rain with thunder": "Lluvia ligera dispersa con truenos",
    "Thundery outbreaks possible": "Posibilidad de tormentas",
    "Moderate or heavy rain with thunder": "Lluvia moderada o fuerte con truenos",
    "Patchy light snow with thunder": "Nieve ligera dispersa con truenos",
    "Moderate or heavy snow with thunder": "Nieve moderada o fuerte con truenos",
    "Patchy light snow": "Nieve ligera dispersa",
    "Light snow": "Nieve ligera",
    "Heavy snow": "Nieve fuerte",
    "Snow showers": "Chubascos de nieve",
    "Sleet": "Aguanieve"
  };
  
  
  
  // Función para obtener la traducción basada en la descripción
  getWeatherTranslation(description: string): string {
    return this.weatherTranslations[description] || "Descripción no disponible";
  }
  

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherForecast();
  }

  

  getWeatherForecast(): void {
    this.weatherForecast = null;
    this.errorMessage = null;
    this.weatherService.getWeatherForecast(this.city).subscribe(
      (data: any) => {
        console.log('Respuesta cruda de la API:', data);
        this.weatherForecast = data;
        if (data.error) {
          this.errorMessage = data.error.message;
        } else if (!data.forecast || !data.forecast.forecastday || data.forecast.forecastday.length === 0) {
          console.log('Estructura de data:', data);
          this.errorMessage = 'No se encontraron datos de pronóstico para esta ciudad o el pronóstico está vacío.';
        }
      },
      (error: any) => {
        console.error('Error en la solicitud:', error);
        this.errorMessage = 'Error al obtener el pronóstico. Revisa la consola.';
      }
    );
  }
}
