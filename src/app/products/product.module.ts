import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsComponent, 

  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProductModule { }
