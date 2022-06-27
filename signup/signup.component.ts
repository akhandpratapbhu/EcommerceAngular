import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  public signupForm !: FormGroup;

  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      username:[''],
      password:[''],
      contactnumber:[''],
      email:[''],
      question:[''],
      answer:[''],
      role:['']


    })
  }
  signUp(){
    this.http.post<any>("http://localhost:3000/api/user",this.signupForm.value)
    .subscribe(res=>{
      alert("Signup Successfull");
      this.signupForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Something went wrong")
    })
  }

}