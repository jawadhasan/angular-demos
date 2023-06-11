import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private actionUrl: string = "https://kjsa0fp0tb.execute-api.eu-central-1.amazonaws.com/Prod/api/notes";

  constructor(private httpClient: HttpClient) {
  }

  getNotes(): Observable<any[]> {
    console.log(this.actionUrl);
    return this.httpClient.get<any[]>(`${this.actionUrl}`);
  }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);

    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      //return Observable.throw(errMessage);
      throwError(() => new Error(errMessage))
    }

   // return Observable.throw(error || 'ASP.NET Core server error');

   throwError(() => new Error(error?.message || 'ASP.NET Core server error'))
  }
}
