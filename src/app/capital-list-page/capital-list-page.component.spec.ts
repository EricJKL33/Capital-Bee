import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalListPageComponent } from './capital-list-page.component';

describe('CapitalListPageComponent', () => {
  let component: CapitalListPageComponent;
  let fixture: ComponentFixture<CapitalListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CapitalListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapitalListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
