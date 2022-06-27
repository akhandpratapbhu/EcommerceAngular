import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveriesdetailsComponent } from './deliveriesdetails.component';

describe('DeliveriesdetailsComponent', () => {
  let component: DeliveriesdetailsComponent;
  let fixture: ComponentFixture<DeliveriesdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveriesdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveriesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
