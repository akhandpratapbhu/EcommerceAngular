import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const api = "http://localhost:3000/api/";

@Injectable({
  providedIn: 'root'
})
export class ShiperService {

  constructor(private http: HttpClient) { }

  getShipers(){
    return this.http.get(api+'shippers');
  }

  addShiper(data:any){
    return this.http.post<any>(api+'shippers',data)
  }

  deleteShiper(shiperId:any){
    return this.http.delete(api+'shippers/'+shiperId)
  }
}
