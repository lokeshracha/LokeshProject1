import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { commonservice } from '../services/common.service';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class loginComponent {
    username:string='test';
    password:string='test';
    signupdata:any[];
    constructor(private _route:Router,private _commonservice:commonservice){
        
    }
   signup(){
    this._route.navigateByUrl("/signup")
 }
  
 login(){
    this._commonservice.dataJson().subscribe((data: any[]) =>{
      this.signupdata = data;
      this.signupdata.forEach((data: any) => {
         if (this.username == data.username && this.password == data.password) {
            this._route.navigateByUrl("/customerdata")
        }
    });
 });

}
}
