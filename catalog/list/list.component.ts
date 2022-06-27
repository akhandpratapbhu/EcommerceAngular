import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
 
   public productList :any;
   title:any;
   cartProducts: number = 0;
  constructor(private api:ProductServiceService) { }

  ngOnInit(): void {
    this.cartCount()
    this.api.GetProducts().subscribe(res=>{
      this.productList=res;
    })
  }
    search(){
      if(this.title==""){
          this.ngOnInit();
      }else{
        this.productList=this.productList.filter((res: { title: string; })=>{
          return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
        })
      }
    }
    public cartCount() {
      const cartProd = JSON.parse(localStorage.getItem('cartItems') as string)
      const prodCount = cartProd.length
      this.cartProducts = prodCount
    }
}




  
 

    
  

