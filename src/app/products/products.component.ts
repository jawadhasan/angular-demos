import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  title = 'Products';
  showProductCode: boolean = false;
  products: any[] = [];

  constructor(private store: Store<any>, private dataService: DataService) {}

  ngOnInit(): void {
    this.products = this.dataService.getProducts();

    //subscribing to store to get changes
    this.store.select('products').subscribe(products => {
      this.showProductCode = products.showProductCode;
    });

  }

  checkChanged() {
    // this.showProductCode = !this.showProductCode;
    console.log('check changed');
    this.store.dispatch({
      type: '[Product] Toggle Product Code',
    });
  }
}
