import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeliveryserviceService } from 'src/app/services/deliveryservice.service';

@Component({
  selector: 'app-deliveriesdetails',
  templateUrl: './deliveriesdetails.component.html',
  styleUrls: ['./deliveriesdetails.component.css']
})
export class DeliveriesdetailsComponent implements OnInit {

  deliveriesForm: FormGroup;
  deliveriesData:any = []

  constructor(private fb: FormBuilder, private deliveriesService: DeliveryserviceService) {
    this.deliveriesForm = this.fb.group({
      deliveryid: ['', [Validators.required]],
      satus: ['', [Validators.required]],
      orderid: ['', [Validators.required]],
      shipperid	: ['', [Validators.required]],
      
    })
   }
   ngOnInit(): void {
    this.AllDeliveries();  
  }



  AllDeliveries(){
    this.deliveriesService.getDeliveries().subscribe(res => {
      this.deliveriesData = res;
      console.log(this.deliveriesData)
    })
  }
  
}
