import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  paymentData:any = []
  
  constructor(private payment:PaymentService) { }

  ngOnInit(): void {
    this.AllPayment();
  }


  AllPayment(){
    this.payment.getPayment().subscribe(res => {
      console.log(res);
      this.paymentData = res;
    })
  }
}
