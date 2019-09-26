import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../weather.service'

@Component({
  selector: 'app-today',
  templateUrl: './today-page.component.html',
  styleUrls: ['./today-page.component.scss']
})
export class TodayPageComponent implements OnInit {
  lat;
  lon;
  weather;
  constructor(private WeatherComponent: WeatherService) { }

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    if('geolocation' in navigator) {
      navigator.geolocation.watchPosition(success => {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.WeatherComponent.getWeatherDataByCoords(this.lat, this.lon).subscribe(data => {
          this.weather = data;
        });
      });
    }
  }

  getCity(city) {
    this.WeatherComponent.getWeatherDataByCityName(city).subscribe(data => {
      this.weather = data;
    });
  }
}
