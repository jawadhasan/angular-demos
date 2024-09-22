import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  BehaviorSubject,  catchError,  Observable,  switchMap,  throwError,} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private usersApi: string =
    'https://kjsa0fp0tb.execute-api.eu-central-1.amazonaws.com/Prod/api/users';
  private usersApi2: string = 'https://localhost:44379/api/users';

  constructor(private httpClient: HttpClient) {}

  allposts$ = this.httpClient
    .get(`${this.usersApi}/posts`)
    .pipe(catchError(this.handleError));

  //create an action-stream for user-posts filter
  usersSub = new BehaviorSubject<string>('');
  enteredUser$ = this.usersSub.asObservable();

  postsForUser$ = this.enteredUser$.pipe(

    switchMap((userName) =>
      this.httpClient.get<any>(`${this.usersApi}/getUsersByName?searchTerm=${userName}`)
    ),

    switchMap((users) =>
      this.httpClient.get<any[]>(`${this.usersApi}/posts/${users[0]?.id ?? -1}`)
    )
  );

  performSearch(searchValue: string) {
    this.usersSub.next(searchValue);
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
