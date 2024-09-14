import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  Subject,
  Subscription,
  catchError,
  combineLatest,
  map,
} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {

  users:any=[];

  private _searchFilter: string = '';
  set searchFilter(value) {
    this._searchFilter = value;
    this.listFilterSubject.next(value); //3. emit to actionStream
  }
  get searchFilter() {
    return this._searchFilter;
  }

  private errorMessageSubject = new Subject<string>();
  errorMssage$ = this.errorMessageSubject.asObservable();

  //1. create an action-stream
  listFilterSubject = new BehaviorSubject<string>("");
  listFilterAction$ = this.listFilterSubject.asObservable();

  /*data-stream - previous example
  // users$ = this.userService.users$.pipe(
  //   catchError(err=> EMPTY)
  // )*/

  //2. combine data-stream with action-stream
  // users$ = combineLatest([
  //   this.userService.users$,
  //   this.listFilterAction$,
  // ]).pipe(
  //   map(([users, listFilterCriteria]) =>
  //     //JavaScript array filter
  //     users.filter(
  //       (user) =>
  //         user.firstName
  //         .toLocaleLowerCase()
  //         .includes(listFilterCriteria) //arrow function for filtering
  //     )
  //   ),
  //   catchError((err) => EMPTY)
  // );

users$ = this.userService.users$;





  selectUser(user:any){
    this.userService.selectUser(user)
  }

  constructor(private userService: UsersService) {}
}
