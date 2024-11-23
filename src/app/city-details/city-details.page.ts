import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService, City } from '../services/city.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.page.html',
  styleUrls: ['./city-details.page.scss'],
})
export class CityDetailsPage implements OnInit {
  city: City | undefined;
  weather: any = null; // Holds weather data
  isLoading: boolean = false; // Loader state
  errorMessage: string | null = null; // Error message

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService,
    private weatherService: WeatherService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.city = this.cityService.getCityById(+id);
      if (this.city?.name) {
        this.fetchWeather(this.city.name);
      }
    } else {
      console.error('City not found!');
    }
  }

  fetchWeather(cityName: string) {
    this.isLoading = true;
    this.errorMessage = null;

    this.weatherService.getWeatherByCity(cityName).subscribe({
      next: (data) => {
        this.weather = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching weather:', error);
        this.errorMessage = 'Could not load weather information.';
        this.isLoading = false;
      },
    });
  }

  bookAccommodation() {
    if (this.city && this.city.name) {
      const cityName = encodeURIComponent(this.city.name); 
      const url = `https://www.booking.com/searchresults.html?ss=${cityName}`;
      window.open(url, '_blank'); 
    }
  }

  showOnMap() {
    if (this.city) {
      const lat = this.city.lat;
      const lng = this.city.lng;

      this.router.navigate(['/tabs/tab3'], {
        queryParams: {
          lat: lat,
          lng: lng
        }
      });
    }
  }
}
