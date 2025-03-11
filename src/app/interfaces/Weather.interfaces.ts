export interface WeatherResponse {
    location: {
      name: string;
      region: string;
      country: string;
    };
    current: {
      temp_c: number;
      condition: {
        text: string;
        icon: string;
      };
      humidity: number;
    };
    forecast: {
      forecastday: ForecastDay[];
    };
  }
  
  export interface ForecastDay {
    date: string;
    day: {
      maxtemp_c: number;
      mintemp_c: number;
      avghumidity: number;
      condition: {
        text: string;
        icon: string;
      };
    };
  }
  