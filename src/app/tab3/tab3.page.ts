import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  map: L.Map | undefined; 
  defaultLocation = { lat: 31.7917, lng: -7.0926 }; 
  cityLocation: { lat: number; lng: number } | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['lat'] && params['lng']) {
        this.cityLocation = {
          lat: parseFloat(params['lat']),
          lng: parseFloat(params['lng']),
        };
      }
      this.initializeMap();
    });
  }

  initializeMap() {
    const center = this.cityLocation || this.defaultLocation;

    this.map = L.map('map').setView([center.lat, center.lng], this.cityLocation ? 13 : 10);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(this.map);

    if (this.cityLocation) {
      L.marker([this.cityLocation.lat, this.cityLocation.lng])
        .addTo(this.map)
    }

    this.map.invalidateSize();
  }
}
