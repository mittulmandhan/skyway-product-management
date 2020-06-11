import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  public createProductForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.createProductForm = new FormGroup({
      productName: new FormControl('' )
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
