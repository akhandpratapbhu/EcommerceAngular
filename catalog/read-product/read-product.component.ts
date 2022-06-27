import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../services/product-service.service'

@Component({
  selector: 'app-read-product',
  templateUrl: './read-product.component.html',
  styleUrls: ['./read-product.component.scss']
})
export class ReadProductComponent implements OnInit {

  readData: any;
  constructor(private service: ProductServiceService) {}

  ngOnInit(): void {
    this.service.GetProducts().subscribe((res) => {
      // console.log(res);
      this.readData = res;
    });
  }

  //delete id

  deleteID(id:any){
    // console.log('delete by id',id);
    this.service.deleteproducts(id).subscribe((res)=>{
      console.log(res);
  
    })
  }  

  }  


