import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  title = 'Products';
  products:any[]=[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.products =  this.dataService.getProducts();
  }
}
