import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { commonservice } from '../services/common.service';
import { Subscription } from 'rxjs/Rx';
import { ISubscription } from "rxjs/Subscription";

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html'
})
export class registrationComponent implements OnInit {
  saveregister: any;
  subscription: Subscription;
  putId: any = "";
  Registformdata: object = {
    id: "",
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    state: "",
    emailID: "",
    gender: ['', Validators.required]
  };
  editedCustomerData: any;
  private subscriptions: Subscription = new Subscription();
  constructor(private _route: Router, private _fb: FormBuilder,
    private _commonservice: commonservice, private _av: ActivatedRoute) {

    this.doEventSubscriptions();
    // this._commonservice.currentEditedList$.subscribe(data => {
  }
  ngOnInit() {
    this.saveregister = this._fb.group(this.Registformdata)
    this._av.params.subscribe((params: any) => {
      this.putId = +params['id'];
      if (this.putId) {
        this._commonservice.editcustomerdata(this.putId).subscribe(data => {
          this.saveregister = this._fb.group(data)
        })

      }
    });
  }
  doEventSubscriptions() {
    this.subscriptions.add(this._commonservice.currentEditedList$.subscribe(data => {
        this.editedCustomerData = data;
      }));
  }

  registrationCancle() {
    this._route.navigateByUrl("/customerdata");
  }
  createCustomRegi() {
    if (this.saveregister.value.firstname != "" && this.saveregister.value.lastname != "" && this.saveregister.value.emailID != "" && this.saveregister.value.address != "" && this.saveregister.value.city != "" && this.saveregister.value.state != "" && this.saveregister.value.gender != "") {
      if (this.putId) {
        this._commonservice.putRegistrationData(this.saveregister.value).subscribe(data => {
          this._route.navigateByUrl("/customerdata");
        })
      } else {
        this._commonservice.PostRegistrationData(this.saveregister.value).subscribe(data => {
          this._route.navigateByUrl("/customerdata");
        })
      }
    } else {
      alert('please fill all feilds');
    }

  }

}

