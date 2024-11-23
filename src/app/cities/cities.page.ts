import { Component, OnInit } from '@angular/core';
import { CityService, City } from '../services/city.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage {
  cities: City[] = [];
  isGridView = false;

  constructor(private cityService: CityService) { 
    this.cities = this.cityService.getCities();
  }


  toggleView() {
    this.isGridView = !this.isGridView;
  }

}
