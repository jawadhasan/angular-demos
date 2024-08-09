import { Component, OnInit } from '@angular/core';
import { EMPTY, catchError } from 'rxjs';

//NgRx
import { Store } from '@ngrx/store';
import { State, getCurrentProduct, getShowProductCode } from '../state/product.reducer';
import * as ProductActions from "../state/product.actions"

import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title = 'Products';
  showProductCode: boolean = false;
  products: any[] = [];
  errorMessage: string;

  products$ = this.productService.products$.pipe(
    catchError((err) => EMPTY)
  );

    // Used to highlight the selected product in the list
    selectedProduct: Product | null;

  constructor(private store: Store<State>, private productService: ProductService) {}

  ngOnInit(): void {

    //subscribing to product change notification via service
    // this.sub = this.productService.selectedProductChanges$.subscribe(
    //   currentProduct => this.selectedProduct = currentProduct
    // );

    //todo: unsubscribe
    this.store.select(getCurrentProduct).subscribe(
      currentProduct=> this.selectedProduct = currentProduct
    )


    // this.store.select('products').subscribe(products => {
    //   this.showProductCode = products.showProductCode;
    // });

    //todo: unsubscribe
    this.store.select(getShowProductCode).subscribe(
      showProductCode => this.showProductCode = showProductCode
    )

  }

  checkChanged() {
    // this.store.dispatch({
    //   type: '[Product] Toggle Product Code',
    // });
    this.store.dispatch(ProductActions.toggleProductCode());
  }

  productSelected(product: Product): void {
    // this.productService.changeSelectedProduct(product);

    this.store.dispatch(ProductActions.setCurrentProduct({product}))
  }

  newProduct(): void {
    // this.productService.changeSelectedProduct(this.productService.newProduct());
    this.store.dispatch(ProductActions.initializeCurrentProduct());
  }

}
