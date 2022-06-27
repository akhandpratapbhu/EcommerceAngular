import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderData:any = []
  router: any;
  OrderService: any;
  
  constructor(private order:OrderService) { }

  ngOnInit(): void {
    this.AllOrder();
  
  }


  AllOrder(){
    this.order.getOrder().subscribe(res => {
      console.log(res);
      this.orderData = res;
    })
  }

  Orderdetails(orderdetailid:any){
    this.OrderService.Orderdetails(orderdetailid).subscribe((res: any) => {
      console.log(res)
    })
  }




}




