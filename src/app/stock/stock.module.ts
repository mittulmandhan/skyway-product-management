import { AddLabelDirective } from './stock-directives/add-label';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponentComponent } from './create-component/create-component.component';
import { StockRoutingModule } from './stock-routing.module';
import { MatCardModule } from '@angular/material/card';
import {MatIconRegistry, MatIconModule} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { DualComponent } from './dual/dual.component';
import { MatSelectModule } from '@angular/material/select';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { MatOptionModule } from '@angular/material/core';

@NgModule({
  declarations: [CreateComponentComponent,
    DualComponent,
    AddLabelDirective,
    AddVendorComponent
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatGridListModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [

  ]
})
export class StockModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustUrl('/assets/mdi.svg'));
  }
}
