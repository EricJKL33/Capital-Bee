import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class GoogleMapsLoaderService {
  private loaded = false;

  loadAPI(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.loaded) {
        resolve();
        return;
      }
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}`;
      script.onload = () => {
        this.loaded = true;
        resolve();
      };
      script.onerror = (error) => reject(error);
      document.body.appendChild(script);
    });
  }
}
