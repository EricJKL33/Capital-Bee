import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCapitalModalComponent } from './add-capital-modal.component';

describe('AddCapitalModalComponent', () => {
  let component: AddCapitalModalComponent;
  let fixture: ComponentFixture<AddCapitalModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCapitalModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCapitalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
