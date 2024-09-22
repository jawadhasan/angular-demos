import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  BehaviorSubject,  catchError,  combineLatest,  map,  Observable,  switchMap,  throwError,} from 'rxjs';
import { UsersService } from '../components/users/users.service';
import { BooksService } from '../books/books.service';

export interface Post{
  id:number,
  title:string,
  content:string,
  categoryId:number,
  category:string,
  createdAt:Date
}

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private usersApi: string =
    'https://kjsa0fp0tb.execute-api.eu-central-1.amazonaws.com/Prod/api/users';
  private usersApi2: string = 'https://localhost:44379/api/users';

  constructor(private httpClient: HttpClient, private userService:UsersService, private booksService: BooksService) {}

  allposts$ = this.httpClient
    .get<Post[]>(`${this.usersApi}/posts`)
    .pipe(catchError(this.handleError));

  //create an action-stream for user-posts filter
  usersSub = new BehaviorSubject<string>('');
  enteredUser$ = this.usersSub.asObservable();


  postsForUser$= this.enteredUser$.pipe(
    switchMap(userName=> this.userService.getuserId(userName)),
    switchMap(userId=> this.getPostsForUser(userId))
  )

  //Reference property lookup pattern
  postsWithCategories$ = combineLatest([
    this.postsForUser$,
    this.booksService.booksCategories$
  ]).pipe(
    map( ([posts,cats])=> this.mapCategories(posts,cats))
  )

  mapCategories(posts:Post[], cats:any[]):Post[]{
    return posts.map(p=>({
      ...p,
      category: cats.find(c=> p.categoryId === c.id)?.categoryName
    }) as Post )
  }


  performSearch(searchValue: string) {
    this.usersSub.next(searchValue);
  }

private getPostsForUser(userId:number):Observable<Post[]>{
  return this.httpClient.get<Post[]>(`${this.usersApi}/posts/${userId}`).pipe(
    catchError(this.handleError)
  )
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
