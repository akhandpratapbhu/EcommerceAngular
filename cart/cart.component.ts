
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  products: any = [];
  cartTotal: any = 0;
  constructor() { }

  ngOnInit(): void {
    this.cartProducts()
  }

  cartProducts() {
    this.products = JSON.parse(localStorage.getItem('cartItems') as string);
    console.log(this.products)
    this.getCartTotal()
  }

  getCartTotal() {
    this.cartTotal = 0
    this.products.map((prod: any) => {
      this.cartTotal = this.cartTotal + prod.total
    })
  }

  removeProduct(item: any) {
    const prod = this.products.filter((prod: any) => prod.productid == item.productid)
    console.log(prod)
    if (prod[0].quantity > 1) {
      this.products.forEach((prod: any) => {
        if (item.productid == prod.productid) {
          prod.quantity = prod.quantity - 1;
          prod.total = prod.total - prod.unitprice;
        }
      })
    }
    else {
      this.products = this.products.filter((prod: any) => prod.productid != item.productid)
    }
    localStorage.setItem('cartItems', JSON.stringify(this.products));
    this.getCartTotal()
    window.location.reload();
  }
  removeAllProduct() {
    this.products = []
    localStorage.setItem('cartItems', JSON.stringify(this.products));
    this.getCartTotal()
    window.location.reload();
  }
}
