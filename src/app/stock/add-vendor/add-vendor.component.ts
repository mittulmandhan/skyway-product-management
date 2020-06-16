import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {

  @Input() vendorForm: FormGroup;
  @Input() idx: number;
  @Input() disableRemove: boolean;
  @Output() idxToRemove: EventEmitter<number> = new EventEmitter<number>();

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
