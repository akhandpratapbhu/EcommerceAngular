import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const api = "http://localhost:3000/api/";
@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {

  constructor(private http: HttpClient) { }
  getOrderdetail(){
    return this.http.get(api+'orderdetails');
  }
}

