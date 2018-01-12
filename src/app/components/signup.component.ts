import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { signupdata } from '../models/signup.model';
import { commonservice } from '../services/common.service';
@Component({
  selector: 'signup',
  templateUrl: 'signup.component.html'
})
export class signupComponent implements OnInit {
    signupsave: FormGroup;
    formdata : any;
    signup_data:signupdata;
  constructor(private _route:Router,private _fb:FormBuilder,private _commonservice:commonservice){
   this.formdata = {
    firstname:"",
    lastname: "",
    phone:"" ,
    username: "",
    password: "",
    emailID: ""
   }
  }
  ngOnInit() {
    this.signupsave = this._fb.group(this.formdata)
  }

  signupCancle(){
    this._route.navigateByUrl("/login") 
    this.signupsave;
  }
  customerLoginCreate(){
      if(this.signupsave.value.firstname != "" && this.signupsave.value.lastname != "" && this.signupsave.value.phone != "" && this.signupsave.value.username != "" && this.signupsave.value.password != "" && this.signupsave.value.emailID != ""){
        this._commonservice.PostSignupdata(this.signupsave.value).subscribe(data=>{
            this._route.navigateByUrl("/login") 
        });
      }else{
          alert("please fill all fields");
      }
    
  }
 // this.signupdata;



}
