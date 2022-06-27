import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }
  
   GetProducts(){
    //HTTP Request get to external server  
    let restApiUrl:string="http://localhost:3000/api/products";
    return this.http.get(restApiUrl).pipe(map((res:any)=>{
      return res;
    }));
  }

  public GetProductDetails(id:number){
    let restApiUrl:string="http://localhost:3000/api/products/"+id;
    return this.http.get(restApiUrl);
  }
  Getcategory(){
    let restApiUrl:string="http://localhost:3000/api/categories";
    return this.http.get(restApiUrl).pipe(map((res:any)=>{
      return res;
    }));
  }
  public Getcategoryproduct(id:number){
    let restApiUrl:string="http://localhost:3000/api/allcategoryproduct/"+id;
    return this.http.get(restApiUrl);
  }
  createproducts(data:any): Observable<any> {
    console.log(data);
    
    return this.http.post('http://localhost:3000/api/products' ,data);
  }

  deleteproducts(id:any): Observable<any> {
    console.log(id);
    let ids = id;
    return this.http.delete('http://localhost:3000/api/products/'+ids);
  }
  editproducts(id:any,data:any): Observable<any> {
    console.log(data);
    
    return this.http.put('http://localhost:3000/api/products/'+id ,data);
  }
}
