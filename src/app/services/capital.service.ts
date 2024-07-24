import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Capital {
  id: number;
  country: string;
  city: string;
  population: number;
  lat: number;
  lng: number;
  pictureUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class CapitalService {
  private capitals: Capital[] = [
    {
      id: 1,
      country: 'France',
      city: 'Paris',
      population: 2161000,
      lat: 48.8566,
      lng: 2.3522,
      pictureUrl:
        'https://www.publicdomainpictures.net/pictures/180000/velka/eiffel-tower-in-paris.jpg',
    },
    {
      id: 2,
      country: 'United Kingdom',
      city: 'London',
      population: 8982000,
      lat: 51.5074,
      lng: -0.1278,
      pictureUrl:
        'https://www.publicdomainpictures.net/pictures/10000/velka/tower-bridge-at-night-11281016375NT0H.jpg',
    },
    {
      id: 3,
      country: 'Germany',
      city: 'Berlin',
      population: 3645000,
      lat: 52.52,
      lng: 13.405,
      pictureUrl:
        'https://www.publicdomainpictures.net/pictures/310000/velka/brandenburg-gate-berlin.jpg',
    },
    {
      id: 4,
      country: 'Spain',
      city: 'Madrid',
      population: 3223000,
      lat: 40.4168,
      lng: -3.7038,
      pictureUrl:
        'https://www.publicdomainpictures.net/pictures/80000/velka/madrit-spain.jpg',
    },
    {
      id: 5,
      country: 'Italy',
      city: 'Rome',
      population: 4355000,
      lat: 41.9028,
      lng: 12.4964,
      pictureUrl:
        'https://www.publicdomainpictures.net/pictures/280000/velka/the-pantheon-in-rome.jpg',
    },
  ];

  private capitalsSubject = new BehaviorSubject<Capital[]>(this.capitals);

  getCapitals() {
    return this.capitalsSubject.asObservable();
  }

  addCapital(capital: Capital) {
    capital.id = this.capitals.length + 1;
    this.capitals.push(capital);
    this.capitalsSubject.next(this.capitals);
  }

  updateCapital(capital: Capital) {
    const index = this.capitals.findIndex((c) => c.id === capital.id);
    if (index !== -1) {
      this.capitals[index] = capital;
      this.capitalsSubject.next(this.capitals);
    }
  }

  deleteCapital(id: number) {
    this.capitals = this.capitals.filter((c) => c.id !== id);
    this.capitalsSubject.next(this.capitals);
  }
}
