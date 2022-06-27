import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { HeaderComponent } from 'src/app/header/header.component';
import { ProductServiceService } from 'src/app/services/product-service.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  data: any;
  id: any;
  cartData: any;
  constructor(
    private route: ActivatedRoute,
    private api: ProductServiceService,
    //public header: HeaderComponent
  ) { }

  ngOnInit(): void {
    console.log("uhgrigriohgojihijhihioj5")
    this.id = this.route.snapshot.params['id'];
    this.GetProductDetails()
  }
  GetProductDetails() {
    this.api.GetProductDetails(this.id).subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
  }

  addProductToCart(item: any) {
    this.cartData = [];
    const data = localStorage.getItem('cartItems') as string;
    console.log(data);
    if (data != null) {
      const parsedData = JSON.parse(data);
      for (const item of parsedData) {
        this.cartData.push(item);
      }
    }
    const prodFound = this.cartData.filter((prod: any) => prod.productid == item.productid)

    if (prodFound.length !== 0) {
      // console.log(prodFound)
      // const Data = this.cartData.filter((prod: any) => prod.productid != item.productid)
      // console.log(Data)
      // const prodQuant = prodFound[0].quantity + 1
      // item.quantity = prodQuant
      // Data.push(item)
      // this.cartData = Data

      this.cartData.forEach((prod: any) => {
        if (item.productid == prod.productid) {
          prod.quantity = prod.quantity + 1
          prod.total = prod.quantity * prod.unitprice
        }
      })
    }
    else {
      item.quantity = 1
      item.total = item.unitprice
      this.cartData.push(item);
    }

    localStorage.setItem('cartItems', JSON.stringify(this.cartData));

   // this.header.cartCount()
    window.location.reload();
  }
}
