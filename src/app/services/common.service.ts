import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Observable,Subscription } from 'rxjs/Rx'
import { ISubscription } from "rxjs/Subscription";
@Injectable()
export class commonservice {
constructor(private _http:Http){

}
public editCustomerList = new Subject<any>();
currentEditedList$ = this.editCustomerList.asObservable();

 //editedData(data:any){
   
 //}
 dataJson(){
      return  this._http.get("http://localhost:3000/login").map(res=>res.json());
    }

    PostSignupdata(value:any)  {
        let SearchReferral = {
            "firstname":value.firstname,
            "lastname": value.lastname,
            "phone":value.phone ,
            "username": value.username,
            "password": value.password,
            "emailID": value.emailID
        }

        let bodyString = JSON.stringify(SearchReferral);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post("http://localhost:3000/login", bodyString,options).map(res => res.json());
            
    }

    PostRegistrationData(value:any)  {
        let SearchReferral = {
            "firstname":value.firstname,
            "lastname":value. lastname,
            "address":value. address,
            "city":value.city ,
            "state": value.state,
            "gender":value.gender,
            "emailID":value.emailID
        }

        let bodyString = JSON.stringify(SearchReferral);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post("http://localhost:3000/customerReg", bodyString,options).map(res => res.json());
            
    }
    customerdata(){
        return  this._http.get("http://localhost:3000/customerReg").map(res=>res.json());
      }
      editcustomerdata(data:number){
        return  this._http.get("http://localhost:3000/customerReg/"+data).map(res=>res.json());
      }

      putRegistrationData(value:any)  {
        let SearchReferral = {
            "firstname":value.firstname,
            "lastname":value. lastname,
            "address":value. address,
            "city":value.city ,
            "state": value.state,
            "gender":value.gender,
            "emailID":value.emailID
        }

        let bodyString = JSON.stringify(SearchReferral);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.put("http://localhost:3000/customerReg/"+value.id, bodyString,options).map(res => res.json());
            
    }
    deletecustomerdata(data:number){
        return  this._http.delete("http://localhost:3000/customerReg/"+data).map(res=>res.json());
      }
}