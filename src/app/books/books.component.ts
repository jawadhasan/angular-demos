import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  msg:string='';
  selectedCategoryId:number=0;

  booksCategories$ = this.booksService.booksCategories$;
  books$ = this.booksService.books$;

  constructor(private booksService:BooksService) { }

  selectCategory(category:any){
    this.booksService.selectCategory(category.id);
    this.selectedCategoryId=category.id;
  }
}
