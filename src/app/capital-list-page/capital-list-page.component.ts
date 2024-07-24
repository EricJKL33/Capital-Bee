import { Component, OnInit } from '@angular/core';
import { CapitalService, Capital } from '..//services/capital.service';

@Component({
  selector: 'app-capital-list-page',
  templateUrl: './capital-list-page.component.html',
  styleUrls: ['./capital-list-page.component.scss'],
})
export class CapitalListPageComponent implements OnInit {
  capitals: Capital[] = [];
  editingCapital: Capital | null = null;
  newCapital: Capital = {
    id: 0,
    country: '',
    city: '',
    population: 0,
    lat: 0,
    lng: 0,
    pictureUrl: '',
  };
  isEditModalVisible: boolean = false;
  isAddModalVisible: boolean = false;

  constructor(private capitalService: CapitalService) {}

  ngOnInit() {
    this.capitalService.getCapitals().subscribe((capitals) => {
      this.capitals = capitals;
    });
  }

  editCapital(capital: Capital) {
    this.editingCapital = { ...capital };
    this.isEditModalVisible = true; //
  }

  saveCapital() {
    if (this.editingCapital) {
      this.capitalService.updateCapital(this.editingCapital);
      this.editingCapital = null;
      this.isEditModalVisible = false;
    }
  }

  deleteCapital(id: number) {
    this.capitalService.deleteCapital(id);
  }

  openAddModal() {
    this.isAddModalVisible = true;
  }

  addCapital() {
    this.capitalService.addCapital(this.newCapital);
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

  saveNewCapital(capital: Capital) {
    this.capitalService.addCapital(capital);
    this.isAddModalVisible = false;
  }

  closeModal() {
    this.isEditModalVisible = false;
    this.isAddModalVisible = false;
  }
}
