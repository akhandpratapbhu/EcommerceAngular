import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  public loginForm!:FormGroup; 

  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ]
      ],
      
    })
  }
    login(){
      this.http.get<any>("http://localhost:3000/api/user")
      .subscribe(res=>{
         const user= res.find((a:any)=>{
            return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
          
        });
        if(user){
          alert ("Login Success");
          this.loginForm.reset();
          this.router.navigate(['credit-card'])
        }else{
          alert("user not found");
        }
    
      },err=>{
        alert("Something Went Wrong")
      })

    

    

}
}

