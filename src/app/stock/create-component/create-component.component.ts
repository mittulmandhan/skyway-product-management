import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {

  createComponentForm: FormGroup;

  constructor() {
    this.createComponentForm = new FormGroup({
      componentName: new FormControl(),
      componentType: new FormControl(),
      labels: new FormGroup({}),
      vendorDetails: new FormGroup({
        vendorName: new FormControl(),
        componentPrice: new FormControl(),
        vendorAddress: new FormControl(),
        remarks: new FormControl()
      })
    });
  }

  ngOnInit(): void {
  }

}
