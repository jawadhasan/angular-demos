import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:any;
  selectedProduct:any;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.products = this.dataService.getProducts();   
  }

  public selectProduct(product:any){
    this.selectedProduct = product;
  }

}
