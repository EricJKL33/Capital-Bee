import { Component, OnInit, ViewChild } from '@angular/core';
import { CapitalService, Capital } from '../services/capital.service';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss'],
})
export class MapPageComponent implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;

  capitals: Capital[] = [];
  center: google.maps.LatLngLiteral = { lat: 48.8566, lng: 2.3522 };
  zoom = 4;
  selectedCapital: Capital | null = null;
  userPosition: google.maps.LatLngLiteral | null = null;

  constructor(private capitalService: CapitalService) {}

  ngOnInit() {
    this.getUserLocation();
    this.capitalService.getCapitals().subscribe((capitals) => {
      this.capitals = capitals;
    });
  }

  openInfoWindow(marker: MapMarker, capital: Capital) {
    this.selectedCapital = capital;
    this.infoWindow.open(marker);
  }

  onMarkerClick(capital: Capital) {
    this.selectedCapital = capital;
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.userPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.center = this.userPosition;
        this.zoom = 4;
      });
    }
  }
}
