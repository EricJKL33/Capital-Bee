import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCapitalModalComponent } from './edit-capital-modal.component';

describe('EditCapitalModalComponent', () => {
  let component: EditCapitalModalComponent;
  let fixture: ComponentFixture<EditCapitalModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCapitalModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCapitalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
