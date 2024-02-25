import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

//NgRx
import { Store } from '@ngrx/store';
import {
  State,
  getCurrentProduct,
  getShowProductCode,
} from '../state/product.reducer';
import * as ProductActions from '../state/product.actions';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  pageTitle: string = 'Product';
  product: Product | null;

  constructor(
    private store: Store<State>,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Watch for changes to the currently selected product
    // this.productService.selectedProductChanges$.subscribe(
    //     (currentProduct) => this.displayProduct(currentProduct)
    //   );



    //todo: unsubscribe
    this.store
      .select(getCurrentProduct)
      .subscribe((currentProduct) => this.displayProduct(currentProduct!));
  }

  displayProduct(product: Product | null): void {

    // Set the local product property
    this.product = product;

    if (product) {
      // Reset the form back to pristine

      // Display the appropriate page title
      if (product.id === 0) {
        this.pageTitle = 'Add Product';
      } else {
        this.pageTitle = `Edit Product: ${product.name}`;
      }

      // Update the data on the form
    }
  }
}
