import { Injectable } from '@angular/core';
import {  HttpClient,  HttpErrorResponse} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {

  private booksApi: string =
    'https://kjsa0fp0tb.execute-api.eu-central-1.amazonaws.com/Prod/api/books';

    //create an action-stream
    private selectedCategorySubject = new BehaviorSubject<any>(100);
    selectedCategoryAction$ = this.selectedCategorySubject.asObservable();

  // books$ = this.httpClient
  //   .get(`${this.booksApi}`)
  //   .pipe(catchError(this.handleError));

  booksCategories$ = this.httpClient
    .get(`${this.booksApi}/categories`)
    .pipe(catchError(this.handleError));


books$ = this.selectedCategoryAction$.pipe(

  switchMap(catId=> this.httpClient
    .get(`${this.booksApi}/getByCategoryId?catId=${catId}`))

).pipe(
  tap(d=> console.log('d',d)),
  catchError(this.handleError)
);







  constructor(private httpClient: HttpClient) {}

  //emit value into action-stream
  selectCategory(category: number) {
    this.selectedCategorySubject.next(category);
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
