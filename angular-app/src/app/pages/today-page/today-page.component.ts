import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../weather.service';
import { error } from 'util';

@Component({
  selector: 'app-today',
  templateUrl: './today-page.component.html',
  styleUrls: ['./today-page.component.scss']
})

export class TodayPageComponent implements OnInit {
  lat: any;
  lng: any;
  weather: any;
  locationDeined:boolean = true;
  locationDeinedEnableCity:boolean = false;
  waiting:boolean = false;
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
      }, (error) => {
        if(error.code === error.PERMISSION_DENIED) {
            this.locationDeined = false;
            this.locationDeinedEnableCity = true;
        }
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

  getCoords(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;

    this.WeatherComponent.getWeatherDataByCoords(this.lat, this.lng).subscribe(data => {
      this.weather = data;
    });
  }
}
