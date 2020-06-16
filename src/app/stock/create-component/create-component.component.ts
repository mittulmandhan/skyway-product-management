import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {

  createComponentForm: FormGroup;
  // public labels = [];
  // public vendors = [];


  constructor(private render: Renderer2, private er: ElementRef, private fb: FormBuilder) {
    // initializing the create component form
    this.createComponentForm =
      new FormGroup({
        componentName: this.fb.control(['']),
        componentType: this.fb.control(['']),
        remarks: this.fb.control(['']),
        labels: this.fb.array([]),
        vendorDetails: this.fb.array([])
     });
  }

  ngOnInit(): void {
    this.labels.push(this.labelFormGroup);
    this.vendors.push(this.vendorFormGroup);
  }

  // get a new label form group
  get labelFormGroup(): FormGroup {
    return this.fb.group({
        label: [''],
        value: ['']
      });
  }

  // get a new vendor details form group
  get vendorFormGroup(): FormGroup {
    return this.fb.group({
        vendorName: [''],
        componentPrice: ['']
      });
  }

  // get labels form array
  get labels(): FormArray {
    return this.createComponentForm.get('labels') as FormArray;
  }

  // get vendors form array
  get vendors(): FormArray {
    return this.createComponentForm.get('vendorDetails') as FormArray;
  }

  // To push new label in the form
  addLabel() {
    this.labels.push(this.labelFormGroup);
  }

  // To push new vendor details in the form
  addVendor() {
    this.vendors.push(this.vendorFormGroup);
  }

  // To remove a specific label
  removeLabel(index: number) {
    this.labels.removeAt(index);
  }

  // To remove a specific vendor
  removeVendor(index: number) {
    this.vendors.removeAt(index);
  }

  // Work done when submit button is clicked
  onSubmit() {
    // console.log(this.createComponentForm);
    console.log(this.createComponentForm.value);
  }

}
