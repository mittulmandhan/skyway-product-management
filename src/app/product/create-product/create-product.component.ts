import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  public createProductForm: FormGroup;
  formGroup;
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

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
