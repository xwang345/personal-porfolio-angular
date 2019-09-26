import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = '5fff614d1b96e850814b88fad461f370';
  constructor( private http: HttpClient) { }

  getWeatherDataByCoords(lat, log) {
    const params = new HttpParams()
    .set('lat', lat)
    .set('lon', log)
    .set('units', 'imperial')
    .set('appid', this.apiKey);

    return this.http.get(this.url, {params});
  }

  getWeatherDataByCityName(city: string) {
    const params =  new HttpParams()
    .set('q', city)
    .set('units', 'imperial')
    .set('appid', this.apiKey);

    return this.http.get(this.url, {params});
  }
}
