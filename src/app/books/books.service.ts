import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {combineLatest,  forkJoin,  from,  Observable,  of,  Subject,  throwError,} from 'rxjs';
import { map, catchError, switchMap, mergeMap, toArray, tap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private booksApi: string =    'https://kjsa0fp0tb.execute-api.eu-central-1.amazonaws.com/Prod/api/books';
  private booksApi2: string  =    'https://localhost:44379/api/books';

  //create an action-stream for category selection
  private selectedCategorySubject = new Subject();
  selectedCategoryAction$ = this.selectedCategorySubject.asObservable();

  //emit value into action-stream
  selectCategory(category: number): void {
    this.selectedCategorySubject.next(category);
  }

  //create an action-stream for book selection
  private selectBookSub = new Subject<number>();
  selectBookAction$ = this.selectBookSub.asObservable();


  booksCategories$ = this.httpClient
    .get(`${this.booksApi}/categories`)
    .pipe(catchError(this.handleError),
    shareReplay(1));

  // booksOnly$ = this.httpClient
  //   .get(`${this.booksApi}`)
  //   .pipe(catchError(this.handleError));


  books$ = this.selectedCategoryAction$.pipe(
    switchMap(catId => this.httpClient.get<any[]>(`${this.booksApi}/getByCategoryId?catId=${catId}`)
    .pipe(tap(d=> console.log('selectCategoryAction',d)))
    .pipe(catchError(this.handleError)))
  );

  //have one detail and load-book approach
  selectedBook$ = this.selectBookAction$.pipe(
    switchMap(id=> this.httpClient.get(`${this.booksApi}/${id}`)
    .pipe(tap(d=> console.log('selectBookAction',d)))
    .pipe(catchError(this.handleError)))
  );

  //Existing data Approach
  // selectedBook1$ = combineLatest([this.books$, this.selectBookAction$]).pipe(
  //   map(([books, booksFilterId]) => books.find((b) => b.id === booksFilterId)),
  //   catchError(this.handleError)
  // );


  //single author approach
  // bookAuthor$ = this.selectedBook$.pipe(
  //   switchMap(book=> this.httpClient.get(`${this.booksApi}/author/${book.authorId}`))
  // )

  //a naive implementation
  // bookAuthors$ = this.selectedBook$.pipe(
  //   switchMap(book=>
  //     from(book.author_ids)
  //     .pipe(
  //       mergeMap(authorId=> this.httpClient.get(`${this.booksApi}/author/${authorId}`)),
  //       toArray())
  //   )
  // );


  //better implementation
  bookAuthors$ = this.selectedBook$.pipe(
    switchMap(book=>
      forkJoin(
        book.author_ids.map(aid=> this.httpClient.get<any>(`${this.booksApi}/author/${aid}`))
      )
    )
  );




  constructor(private httpClient: HttpClient) {}

  //emit value into action-stream
  selectBook(bookId: any) {
    this.selectBookSub.next(bookId);
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
