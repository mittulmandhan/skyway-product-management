import { startWith, map } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

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

  vendorList: Array<string> = ['Gupta Electronics','Vipul Electronics', 'Mahavira Traders', 'Krishna Electronics', 'Maruti Component Wala'];
  filteredVendorList: Observable<string[]>;

  constructor() {

  }

  ngOnInit(): void {
    this.filteredVendorList = (this.vendorForm.get('vendorName') as FormControl).valueChanges
                              .pipe(
                                startWith(''),
                                map(value => this._filterVendor(value))
                              );
  }

  private _filterVendor(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.vendorList.filter(option => option.toLowerCase().includes(filterValue));
  }

}
