import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './state/product.reducer';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },

];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('products', productReducer)
  ]
})
export class ProductModule { }
