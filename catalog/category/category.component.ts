import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  data:any;
id:any;
  constructor(
    private route:ActivatedRoute,
    private api:ProductServiceService
  ) { } 

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.Getcategoryproduct()
  }
  Getcategoryproduct()
  {
    this.api.Getcategoryproduct(this.id).subscribe(data=>{
      this.data=data;
      console.log(this.data);
    })
  }

}
