import { Injectable } from '@angular/core';
import { Product } from './model/product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products : Product[] = [
    {id: 1, name: "Product-1", productCode: "123"},
    {id: 2, name: "Product-2", productCode: "456"},
    {id: 3, name: "Product-3", productCode: "789"},
    {id: 4, name: "Product-4", productCode: "101"}
  ];

  products$ = of(this.products);

  constructor() { }

  public getProducts():Array<any>{
    return this.products;
  }

  public createProduct(product: any):void{
    this.products.push(product);
  }
}
