import { Injectable } from '@angular/core';
import {  HttpClient,  HttpErrorResponse} from '@angular/common/http';
import { BehaviorSubject, combineLatest, Observable, Subject, throwError } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {

  private booksApi2: string =
    'https://kjsa0fp0tb.execute-api.eu-central-1.amazonaws.com/Prod/api/books';


    private booksApi: string = 'https://localhost:44379/api/books';


    //create an action-stream for category selection
    private selectedCategorySubject = new BehaviorSubject<any>(100);
    selectedCategoryAction$ = this.selectedCategorySubject.asObservable();

    //create an action-stream for book selection
    private selectedBookSub = new Subject<number>();
    selectedBookAction$ = this.selectedBookSub.asObservable();


  booksCategories$ = this.httpClient
    .get(`${this.booksApi}/categories`)
    .pipe(catchError(this.handleError));

  // books$ = this.httpClient
  //   .get(`${this.booksApi}`)
  //   .pipe(catchError(this.handleError));


books$ = this.selectedCategoryAction$.pipe(

  switchMap(catId=> this.httpClient
    .get(`${this.booksApi}/getByCategoryId?catId=${catId}`))

).pipe(
  tap(d=> console.log('d',d)),
  catchError(this.handleError)
);



//have one detail and load-book approach
selectedBook1$ = this.selectedBookAction$.pipe(

  switchMap(id=> this.httpClient.get(`${this.booksApi}/${id}`)
  .pipe(
       catchError(this.handleError)
  ))

);


//Existing data Approach
selectedBook$ = combineLatest([
  this.books$,
  this.selectedBookAction$,
]).pipe(
  map(([books, booksFilterId]) =>

    //JavaScript array filter
    // books.filter((book) =>
    //   booksFilterId > 0 ? book.categoryId === booksFilterId : true
    // )
    books.find(b=> b.id === booksFilterId)

  ),
  catchError(this.handleError)
);

  constructor(private httpClient: HttpClient) {}

  //emit value into action-stream
  selectCategory(category: number) {
    this.selectedCategorySubject.next(category);
  }

    //emit value into action-stream
    selectBook(bookId: any) {
      this.selectedBookSub.next(bookId);
    }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error('server error:', error);

    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return throwError(() => errMessage);
    }

    return throwError(
      () => new Error(error?.message || 'ASP.NET Core server error')
    );
  }
}
