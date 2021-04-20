import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getAccessToken()}`,
      },
    });

    return next.handle(request);
    /* To handle refresh, not for the moment
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          if (err.error.message == 'Token is expired') {
            //TODO: Token refreshing
          } else {
            this.auth.signOut();
          }
        }
        return throwError(err);
      })
    );*/
  }
}
