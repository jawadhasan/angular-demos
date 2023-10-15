import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UsersService } from './users.service';
import { EMPTY, Subject, catchError } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {

  private errorMessageSubject = new Subject<string>();
  errorMssage$ = this.errorMessageSubject.asObservable();

  users$ = this.userService.users$.pipe(
    catchError((err) => {
      this.errorMessageSubject.next(err);
      return EMPTY;
    })
  );



  constructor(private userService: UsersService) {}
}
