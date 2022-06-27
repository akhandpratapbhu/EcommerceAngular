import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const api = "http://localhost:3000/api/";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  getPayment(){
    return this.http.get(api+'payments');
  }

}








