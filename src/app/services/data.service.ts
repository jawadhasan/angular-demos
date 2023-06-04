import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products = [
    {id: 1, name: "Product-1", serialno: "123", createdAt: ""},
    {id: 2, name: "Product-2", serialno: "456", createdAt: ""},
    {id: 3, name: "Product-3", serialno: "789", createdAt: ""},
    {id: 4, name: "Product-4", serialno: "101", createdAt: ""}
  ];

  constructor() { }

  public getProducts():Array<any>{
    return this.products;
  }

  public createContact(product: any){
    this.products.push(product);
  }
}
