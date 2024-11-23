import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService, City } from '../services/city.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.page.html',
  styleUrls: ['./city-details.page.scss'],
})
export class CityDetailsPage implements OnInit {
  city: City | undefined;

  constructor(private route: ActivatedRoute, private cityService: CityService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.city = this.cityService.getCityById(+id);
    } else {
      console.error('City non existant!');
    }
  }

  bookAccommodation() {
    if (this.city && this.city.name) {
      const cityName = encodeURIComponent(this.city.name); // Encode to handle spaces or special characters
      const url = `https://www.booking.com/searchresults.html?ss=${cityName}`;
      window.open(url, '_blank'); // Open the URL in a new browser tab
    }
  }

}
