import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products = [
    {id: 1, name: "Product-1", serialNo: "123", createdAt: ""},
    {id: 2, name: "Product-2", serialNo: "456", createdAt: ""},
    {id: 3, name: "Product-3", serialNo: "789", createdAt: ""},
    {id: 4, name: "Product-4", serialNo: "101", createdAt: ""}
  ];

  constructor() { }

  public getProducts():Array<any>{
    return this.products;
  }

  public createProduct(product: any):void{
    this.products.push(product);
  }
}
