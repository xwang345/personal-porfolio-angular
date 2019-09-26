import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../weather.service';

@Component({
  selector: 'app-today',
  templateUrl: './today-page.component.html',
  styleUrls: ['./today-page.component.scss']
})
export class TodayPageComponent implements OnInit {
  lat: any;
  lng: any;
  weather: any;

  constructor(private WeatherComponent: WeatherService) { }

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition(success => {
        this.lat = success.coords.latitude;
        this.lng = success.coords.longitude;

        this.WeatherComponent.getWeatherDataByCoords(this.lat, this.lng).subscribe(data => {
          this.weather = data;
        });
      });
    }
  }

  getCity(city: any) {
    this.WeatherComponent.getWeatherDataByCityName(city).subscribe((data: any) => {
      this.weather = data;

      this.lat = data.coords.lat;
      this.lng = data.coords.lon;
    });
  }
}
