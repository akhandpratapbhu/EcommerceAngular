import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DeliveryComponent } from './delivery/delivery.component';
import { DeliveriesdetailsComponent } from './deliveriesdetails/deliveriesdetails.component';
import { NewShippersComponent } from './new-shippers/new-shippers.component';
//import { DeliveriesdetailsComponent } from './deliveriesdetails/deliveriesdetails.component';

// import { NewShippersComponent } from './new-shippers/new-shippers.component';



@NgModule({
  declarations: [
    
     NewShippersComponent,
  
    DeliveriesdetailsComponent,
  
    DeliveryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    NewShippersComponent,
    DeliveriesdetailsComponent,
  
    DeliveryComponent
  ]
})
export class DeliveryModule { }
