import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product : any = {id: null, name: "", description: "", email: ""};

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  createProduct(){
    console.log(this.product);
    this.dataService.createProduct(this.product);
    this.product = {id: null, name: "", description: "", email: ""};
  }

}
