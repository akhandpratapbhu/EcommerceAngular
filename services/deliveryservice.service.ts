import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const api ='http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})


export class DeliveryserviceService {
  constructor(private http: HttpClient) { }

  getDeliveries(){
    return this.http.get(api+'deliveries');
  }
  getDeliveriesByid(deliveryid:any){
    return this.http.get(api+'deliveries/'+deliveryid);
  }

  addDeliveries(data:any){
    return this.http.post<any>(api+'deliveries',data)
  }

  // deleteShiper(deliveryid:any){
  //   return this.http.delete(api+'deliveries/'+deliveryid)
  // }
}