import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormBuilder, FormArray } from '@angular/forms';
import { DualComponent } from '../dual/dual.component';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {

  createComponentForm: FormGroup;
  public labels = [];
  public vendors = [];


  constructor(private render: Renderer2, private er: ElementRef) {
    // this.createComponentForm =
    //   new FormGroup({
    //     componentName: new FormControl(),
    //     componentType: new FormControl(),
    //     remarks: new FormControl(),
    //     labels: this.labels,
    //     vendorDetails: this.vendors
    //  });
  }

  ngOnInit(): void {
    this.labels.push(1);
    this.vendors.push(1);
  }

  addLabel() {
    this.labels.push(1);
  }

  addVendor() {
    this.vendors.push(1);
  }

}
