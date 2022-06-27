import { Component, OnInit } from '@angular/core';
import { OrderdetailsService } from 'src/app/services/orderdetails.service';
@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
  orderdetailData:any = []
  
  constructor(private orderdetail:OrderdetailsService) { }

  ngOnInit(): void {
    this.AllOrderdetail();
  }


  AllOrderdetail(){
    this.orderdetail.getOrderdetail().subscribe(res => {
      console.log(res);
      this.orderdetailData = res;
    })
  }





}




