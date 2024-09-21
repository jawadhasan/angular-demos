import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksComponent {
  selectedBookId:number=0;
  selectedCategoryId:number=0;

  booksCategories$ = this.booksService.booksCategories$;
  books$ = this.booksService.books$;
  selectedBook$ = this.booksService.selectedBook$;

  constructor(private booksService:BooksService) { }

  selectBookCategory(categoryId:number){
    this.selectedCategoryId=categoryId;
    this.booksService.selectCategory(categoryId);

  }
  selectBook(book:any){
    this.selectedBookId=book.id;
    this.booksService.selectBook(book.id);
  }
}
