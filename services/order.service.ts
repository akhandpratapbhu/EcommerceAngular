import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const api = "http://localhost:3000/api/";

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  constructor(private http: HttpClient) { }

  getOrder(){
    return this.http.get(api+'orders');
  }

  getOrderById(orderdetailId:any){
    return this.http.delete(api+'orderdetails/'+orderdetailId)
  }

}
