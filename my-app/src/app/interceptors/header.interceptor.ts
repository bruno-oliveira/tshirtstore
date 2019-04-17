import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpResponse
} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';;


@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    console.log("Inside interceptor for "+req.url);
    if(localStorage.getItem('token')!==null && localStorage.getItem('token')!=undefined){
     const authReq = req.clone({ setHeaders: { 'token': localStorage.getItem('token') } });

        return next.handle(authReq).pipe(
                    map((event: HttpEvent<any>) => {
                        if (event instanceof HttpResponse) {
                            console.log('event--->>>', event);
                        }
                        return event;
                    }));
                    }
                    else{
                    next.handle(req);
                    }

  }
}
