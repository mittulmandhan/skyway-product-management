import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { CreateProductComponent } from './create-product/create-product.component';



@NgModule({
  declarations: [CreateProductComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
