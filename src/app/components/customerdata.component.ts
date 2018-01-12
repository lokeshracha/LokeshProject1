import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { commonservice } from '../services/common.service';
@Component({
  selector: 'customerdata',
  templateUrl: 'customerdata.component.html'
})
export class customerdataComponent implements OnInit {
  //@Output() public onselectdata: EventEmitter<any> = new EventEmitter<any>();
  customerGridData: any[];
  constructor(private _route: Router, private _commonservice: commonservice) {

  }
  ngOnInit() {
    this._commonservice.customerdata().subscribe(data => {
      this.customerGridData = data;
    })
  }
  createBtnClick() {
    this._route.navigateByUrl("/registration/:id");
  }
  removedetails(data: any) {
    this._commonservice.deletecustomerdata(data).subscribe(data => {
      this._commonservice.customerdata().subscribe(item => {
        this.customerGridData = item;
      })
    })
    // this.customerGridData.splice(data,1);
  }
  refreshBtnClick(){
   this._commonservice.customerdata().subscribe(row => {
      this.customerGridData = row;
    })
  }
  filterdata(item: any) {
    this.customerGridData.forEach(data => {
      if (data.firstname == item.currentTarget.value) {
        this.customerGridData = [];
        this.customerGridData.push(data);
      } 
    })
  }
}
