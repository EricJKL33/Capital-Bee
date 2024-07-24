import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Capital } from '../services/capital.service';

@Component({
  selector: 'app-edit-capital-modal',
  templateUrl: './edit-capital-modal.component.html',
  styleUrls: ['./edit-capital-modal.component.scss'],
})
export class EditCapitalModalComponent {
  @Input() capital: Capital | null = null;
  @Output() saveCapital = new EventEmitter<Capital>();
  @Output() close = new EventEmitter<void>();

  save() {
    if (this.capital) {
      this.saveCapital.emit(this.capital);
    }
  }

  closeModal() {
    this.close.emit();
  }
}
