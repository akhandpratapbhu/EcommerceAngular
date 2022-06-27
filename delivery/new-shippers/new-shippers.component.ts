import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShiperService } from 'src/app/services/shiper.service';

@Component({
  selector: 'app-new-shippers',
  templateUrl: './new-shippers.component.html',
  styleUrls: ['./new-shippers.component.css']
})
export class NewShippersComponent implements OnInit {

  shiperForm: FormGroup;
  shipersData:any = []

  constructor(private fb: FormBuilder, private shiperService: ShiperService) {
    this.shiperForm = this.fb.group({
      shipperid: ['', [Validators.required]],
      userid: ['', [Validators.required]],
      email: ['', [Validators.required]],
      contactnumbe: ['', [Validators.required]],
      organization: ['', [Validators.required]],
    })
   }

  ngOnInit(): void {
    this.AllShipers();  
  }

  shiperSubmit(){
    console.log(this.shiperForm.value,'kkk')
    this.shipersData.push(this.shiperForm.value);
    this.shiperService.addShiper(this.shiperForm.value).subscribe(res => {
      console.log(res)
    })
  }

  deleteShiper(shipperid:any){
    console.log(shipperid);
    
    this.shiperService.deleteShiper(shipperid).subscribe(res => {
      console.log(res)
    })
  }

  AllShipers(){
    this.shiperService.getShipers().subscribe(res => {
      this.shipersData = res;
    })
  }

}
