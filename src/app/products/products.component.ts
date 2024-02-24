import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, getShowProductCode } from './state/productReducer';
import { ProductsService } from './products.service';
import { EMPTY, catchError } from 'rxjs';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  title = 'Products';
  showProductCode: boolean = false;
  products: any[] = [];

  products$ = this.productsService.products$.pipe(
    catchError((err) => EMPTY)
  );


  constructor(private store: Store<State>, private productsService: ProductsService) {}

  ngOnInit(): void {

    // this.store.select('products').subscribe(products => {
    //   this.showProductCode = products.showProductCode;
    // });

      //todo: unsubscribe
    this.store.select(getShowProductCode).subscribe(
      showProductCode => this.showProductCode = showProductCode
    )

  }

  checkChanged() {
    this.store.dispatch({
      type: '[Product] Toggle Product Code',
    });
  }
}
