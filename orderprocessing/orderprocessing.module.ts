import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';



@NgModule({
  declarations: [
    OrderComponent,
    OrderdetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrderprocessingModule { }
