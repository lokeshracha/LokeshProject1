import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { commonservice } from '../services/common.service';
import { Subscription } from 'rxjs/Rx';
import { ISubscription } from "rxjs/Subscription";
@Component({
  selector: 'edit',
  templateUrl: 'edit.component.html'
})
export class editComponent implements OnInit {
  editregister: any;
  editedCustomerData: any;
  subscription: Subscription;
  constructor(private _route: Router, private _fb: FormBuilder,private _commonservice: commonservice) {
    
      // this.subscription = _commonservice.currentEditedList$.subscribe(data => {
      // this.editedCustomerData = data;
      
    //})
  }
  ngOnInit() {
    this.editregister = this._fb.group(this.editedCustomerData)
  }
  editCancle() {
    this._route.navigateByUrl("/customerdata");
  }
  updateCustomRegi() {
    // if (this.editregister.value.firstname != "" && this.editregister.value.lastname != "" && this.editregister.value.emailID != "" && this.editregister.value.address != "" && this.editregister.value.city != "" && this.editregister.value.state != "" && this.editregister.value.gender != "") {
    //   this._commonservice.PostRegistrationData(this.editregister.value).subscribe(data => {
    //     this._route.navigateByUrl("/customerdata");
    //   })
    // } else {
    //   alert('please fill all feilds');
    // }

  }
}

