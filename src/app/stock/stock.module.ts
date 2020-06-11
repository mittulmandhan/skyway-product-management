import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponentComponent } from './create-component/create-component.component';
import { StockRoutingModule } from './stock-routing.module';



@NgModule({
  declarations: [CreateComponentComponent],
  imports: [
    CommonModule,
    StockRoutingModule
  ]
})
export class StockModule { }
