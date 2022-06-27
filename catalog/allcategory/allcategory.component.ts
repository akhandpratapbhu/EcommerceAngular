import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-allcategory',
  templateUrl: './allcategory.component.html',
  styleUrls: ['./allcategory.component.scss']
})
export class AllcategoryComponent implements OnInit {

  public categoryList :any;
  constructor(private api:ProductServiceService) { }

  ngOnInit(): void {
    this.api.Getcategory().subscribe(res=>{
      this.categoryList=res;
    })
  }

}
