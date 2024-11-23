import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  cities = [
    { id: 1, name: 'Oujda', province: 'Oujda Angad', photo: 'assets/imgs/oujda.jpg', lat: 34.689404, lng: -1.912823 },
    { id: 2, name: 'Beni-Mellal', province: 'Haouz', photo: 'assets/imgs/benimellal.jpg', lat: 32.336998652, lng: -6.356498574 },
    { id: 3, name: 'CasaBlanca', province: 'Casa Setat', photo: 'assets/imgs/casa.jpg', lat: 33.59661, lng: -7.61889 },
    { id: 4, name: 'Rabat', province: 'Rabat Skhirat', photo: 'assets/imgs/rabat.jpg', lat: 34.01791, lng: -6.83612 },
    { id: 5, name: 'Marrakech', province: 'Marrakech Safi', photo: 'assets/imgs/kech.jpg', lat: 31.63383, lng: -8.00222 },
    { id: 6, name: 'Tanger', province: 'Tanger tetouan', photo: 'assets/imgs/tanger.jpg', lat: 35.76727, lng: -5.79975 },
    { id: 7, name: 'Tetouan', province: 'Tanger tetouan', photo: 'assets/imgs/tetouan.jpg', lat: 35.57786, lng: -5.35671 },
    { id: 8, name: 'Berkane', province: 'Berkane Nador', photo: 'assets/imgs/berkane.jpg', lat: 34.92807, lng: -2.32864 },
    { id: 9, name: 'Nador', province: 'Berkane Nador', photo: 'assets/imgs/nador.jpg', lat: 35.18076, lng: -2.92262 },
    { id: 10, name: 'Kenitra', province: 'Kenitra gharb', photo: 'assets/imgs/kenitra.jpg', lat: 34.25949, lng: -6.58484 },
  ];

  getCities() {
    return this.cities;
  }

  getCityById(id: number) {
    return this.cities.find(city => city.id === id);
  }
}
export interface City {
  id: number;
  name: string;
  province: string;
  photo: string;
  lat: number;
  lng: number;
}
