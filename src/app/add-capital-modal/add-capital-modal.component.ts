import { Component, Output, EventEmitter } from '@angular/core';
import { Capital } from '../services/capital.service';

@Component({
  selector: 'app-add-capital-modal',
  templateUrl: './add-capital-modal.component.html',
  styleUrls: ['./add-capital-modal.component.scss'],
})
export class AddCapitalModalComponent {
  newCapital: Capital = {
    id: 0,
    country: '',
    city: '',
    population: 0,
    lat: 0,
    lng: 0,
    pictureUrl: '',
  };

  @Output() saveCapital = new EventEmitter<Capital>();
  @Output() close = new EventEmitter<void>();

  save() {
    this.saveCapital.emit(this.newCapital);
    this.resetForm();
  }

  closeModal() {
    this.close.emit();
  }

  private resetForm() {
    this.newCapital = {
      id: 0,
      country: '',
      city: '',
      population: 0,
      lat: 0,
      lng: 0,
      pictureUrl: '',
    };
  }
}
