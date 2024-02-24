import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './state/productReducer';

@NgModule({
  declarations: [
    ProductsComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('products', productReducer)
  ]
})
export class ProductModule { }
