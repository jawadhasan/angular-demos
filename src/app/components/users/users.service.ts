import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private usersUrl: string =
    'https://kjsa0fp0tb.execute-api.eu-central-1.amazonaws.com/Prod/api/users';

  //action-stream
  private selectedUserSubject = new BehaviorSubject<any>({});
  selectedUser$ = this.selectedUserSubject.asObservable();


  selectUser(user:any){
    //only service will access the private subject
    this.selectedUserSubject.next(user);
  }



  users$ = this.httpClient
    .get(`${this.usersUrl}`)
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
