import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private usersUrl: string =
    'https://kjsa0fp0tb.execute-api.eu-central-1.amazonaws.com/Prod/api/users';

  users$ = this.httpClient
    .get<any[]>(`${this.usersUrl}`)
    .pipe(catchError(this.handleError));

  constructor(private httpClient: HttpClient) {}

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
