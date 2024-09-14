import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private notesUrl: string =
    'https://kjsa0fp0tb.execute-api.eu-central-1.amazonaws.com/Prod/api/notes';

  notes$ = this.httpClient
    .get(`${this.notesUrl}`)
    .pipe(catchError(this.handleError));

  //create an action-stream
  private selectedCategorySubject = new BehaviorSubject<any>({});
  selectedCategoryAction$ = this.selectedCategorySubject.asObservable();

  constructor(private httpClient: HttpClient) {}

  //emit value into action-stream
  selectCategory(category: any) {
    console.log(category);
    this.selectedCategorySubject.next(category);
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error('server error:', error);

    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      //return Observable.throw(errMessage);
      return throwError(() => errMessage);
    }
    // return Observable.throw(error || 'ASP.NET Core server error');

    return throwError(
      () => new Error(error?.message || 'ASP.NET Core server error')
    );
  }
}
