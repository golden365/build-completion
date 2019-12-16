import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public map: any = { lat: 51.678418, lng: 7.809007 };
  constructor() { }

  longitude = 20.728218;
  latitude = 52.128973;

  markers = [
    { latitude: 52.228973, longitude: 20.728218 }
  ];

  placeMarker(position: any) {
    const lat = position.coords.lat;
    const lng = position.coords.lng;

    this.markers.push({ latitude: lat, longitude: lng });
  }
}
