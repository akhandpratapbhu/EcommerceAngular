import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../../services/product-service.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  constructor(private service: ProductServiceService, private route: ActivatedRoute) { }
  errorMsg: any;
  successMsg: any;
  data: any = {}
  id: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.GetProductDetails()
  }
  GetProductDetails() {
    this.service.GetProductDetails(this.id).subscribe(data => {
      this.data = data;
      console.log(this.data);
      this.setVal()
    })

  }
  userForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    unitprice: new FormControl('', Validators.required),
    categoryid: new FormControl('', Validators.required),
    supplierid: new FormControl('', Validators.required),
    available: new FormControl('', Validators.required),
    unitinstock: new FormControl('', Validators.required),
    picture: new FormControl('', Validators.required),

  });

  setVal() {
    this.userForm.setValue
      ({
        title: this.data[0].title,
        description: this.data[0].description,
        unitprice: this.data[0].unitprice,
        categoryid: this.data[0].categoryid,
        supplierid: this.data[0].supplierid,
        available: this.data[0].available,
        unitinstock: this.data[0].unitinstock,
        picture: this.data[0].picture
      })
  }
  userSubmit() {

    if (this.data.length == 0) {
      if (this.userForm.valid) {
        console.log(this.userForm.value);
        this.service.createproducts(this.userForm.value).subscribe((res) => {
          console.log(res);
          this.userForm.reset()
          this.successMsg = res.message;
          console.log(this.successMsg);
        })
      } else {
        console.log("All fields required");
        this.errorMsg = 'All fields required';
      }

    }
    else {
      if (this.userForm.valid) {
        console.log(this.userForm.value);
        this.service.editproducts(this.id,this.userForm.value).subscribe((res) => {
          console.log(res);
         // this.userForm.reset()
         this.successMsg = "product updated successfully";
          console.log(this.successMsg);
        })
      } else {
        console.log("All fields required");
        this.errorMsg = 'All fields required';
      }

    }
  }
}

