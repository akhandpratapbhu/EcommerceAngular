import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeliveryserviceService } from 'src/app/services/deliveryservice.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  deliverDetail:any=[];
  constructor(private route: ActivatedRoute, private deliveriesService: DeliveryserviceService) { }

  ngOnInit(): void {
    this.route.params.subscribe((res:any) =>{
      this.GetDelivery(res.id);
    })
  }


  GetDelivery(deliverId:any){
    this.deliveriesService.getDeliveriesByid(deliverId).subscribe((res:any) => {
      this.deliverDetail = res[0];
    })
  }

}
