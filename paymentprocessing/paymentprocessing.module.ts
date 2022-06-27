import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments/payments.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { UPIComponent } from './upi/upi.component';



@NgModule({
  declarations: [
    PaymentsComponent,
    CreditCardComponent,
    DebitCardComponent,
    UPIComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaymentprocessingModule { }









