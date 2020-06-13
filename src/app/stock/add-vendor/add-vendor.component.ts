import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {

  public vendorList: Array<string>;

  constructor() {
    this.vendorList = [
      `Gupta Electronics`,
      `Vipul Electronics`
    ];
  }

  ngOnInit(): void {
  }

}
