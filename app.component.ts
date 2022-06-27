import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './services/product-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  public productList :any;
  title:any;
  cartProducts: number = 0;

  constructor(private api:ProductServiceService) { }

  ngOnInit(): void {
    this.cartCount()
    this.api.GetProducts().subscribe(res=>{
      this.productList=res;
      console.log(this.productList);
    })
  }

  search(){
    if(this.title==""){
        this.ngOnInit();
    }else{
      this.productList=this.productList.filter((res: { title: string; })=>{
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
        console.log(res.title.toLocaleLowerCase);
      })
    }
  }

  public cartCount() {
    const cartProd = JSON.parse(localStorage.getItem('cartItems') as string)
    const prodCount = cartProd.length
    this.cartProducts = prodCount
  }
}

