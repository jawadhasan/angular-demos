import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable()
export class SecondInterceptor  implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log(`second interceptor's intercept method.`)

    //make a copy of request coz req is immutable.
    const modifiedReq = req.clone();

    //change modification here...

    return next.handle(modifiedReq)
    .pipe( //or use pipe() to modify the response, if needed
      tap(event => {
        if(event instanceof HttpResponse){
          //modify the HttpResponse here...
        }
      })
    );
  }

}
