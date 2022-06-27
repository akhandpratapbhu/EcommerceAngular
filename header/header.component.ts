/*import { Component, OnInit } from '@angular/core';
import { CartapiService } from '../services/cartapi.service';
import { ProductServiceService } from '../catalog/product-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public productList :any;
  title:any;

  totalItemNumber:number = 0;
  public searchTerm : string = '';
  constructor(private cartApi:CartapiService,
    private api:ProductServiceService) { }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res=>{
      this.totalItemNumber = res.length;
    })
  }
  //create a method search
  search(){
    if(this.title==""){
        this.ngOnInit();
    }else{
      this.productList=this.productList.filter((res: { title: string; })=>{
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      })
    }
  }
}*/
/*import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
*/
