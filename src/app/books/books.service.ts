import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {combineLatest,  from,  Observable,  of,  Subject,  throwError,} from 'rxjs';
import { map, catchError, switchMap, mergeMap, toArray, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private booksApi2: string =
    'https://kjsa0fp0tb.execute-api.eu-central-1.amazonaws.com/Prod/api/books';
  private booksApi: string = 'https://localhost:44379/api/books';

  //create an action-stream for category selection
  private selectedCategorySubject = new Subject();
  selectedCategoryAction$ = this.selectedCategorySubject.asObservable();

  //emit value into action-stream
  selectCategory(category: number): void {
    this.selectedCategorySubject.next(category);
  }

  //create an action-stream for book selection
  private selectedBookSub = new Subject<number>();
  selectedBookAction$ = this.selectedBookSub.asObservable();


  booksCategories$ = this.httpClient
    .get(`${this.booksApi}/categories`)
    .pipe(catchError(this.handleError));

  // books$ = this.httpClient
  //   .get(`${this.booksApi}`)
  //   .pipe(catchError(this.handleError));

  //this is executing twice??
  books$ = this.selectedCategoryAction$.pipe(
    switchMap(catId => this.httpClient.get<any[]>(`${this.booksApi}/getByCategoryId?catId=${catId}`)
    .pipe(tap(d=> console.log(d)))
    .pipe(catchError(this.handleError)))
  );

  //have one detail and load-book approach
  selectedBook$ = this.selectedBookAction$.pipe(
    switchMap(id=> this.httpClient.get(`${this.booksApi}/${id}`)
    .pipe(tap(d=> console.log(d)))
    .pipe(catchError(this.handleError)))
  );

  //Existing data Approach
  selectedBook1$ = combineLatest([this.books$, this.selectedBookAction$]).pipe(
    map(([books, booksFilterId]) => books.find((b) => b.id === booksFilterId)),
    catchError(this.handleError)
  );


  //single supplier approach
  // bookAuthors$ = this.selectedBook$.pipe(
  //   switchMap(book=> this.httpClient.get(`${this.booksApi}/book.supplierId`))
  // )

  bookAuthors$ = this.selectedBook$.pipe(
    switchMap(book=>
      from(book.author_ids)
      .pipe(
        mergeMap(authorId=> this.httpClient.get(`${this.booksApi}/author/${authorId}`)),
        toArray())
    )
  );


  constructor(private httpClient: HttpClient) {}

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
