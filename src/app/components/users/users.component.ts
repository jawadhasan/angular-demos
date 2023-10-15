import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UsersService } from '../users.service';
import { EMPTY, catchError } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {

  users$ = this.userService.users$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  errorMessage: string = '';

  constructor(private userService: UsersService) {}
}
