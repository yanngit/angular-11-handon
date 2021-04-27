import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { buildRoute } from './utils';
import {share} from 'rxjs/operators';

@Injectable()
export class AuthService {
  private isAuth = new ReplaySubject<boolean>(1);
  private loginRoute = '/auth/login';

  constructor(private httpClient: HttpClient) {
    const isAlreadyLoggedIn = localStorage.getItem('access_token') !== null;
    this.isAuth.next(isAlreadyLoggedIn);
  }

  signIn(email: string, password: string): Observable<any> {
    const observableResponse = this.httpClient.post<{ access_token: string }>(
      buildRoute(this.loginRoute),
      {
        email,
        password,
      }
    ).pipe(share());

    observableResponse.subscribe((data) => {
      this.isAuth.next(true);
      localStorage.setItem('access_token', data.access_token);
    });

    return observableResponse;
  }

  signOut(): void {
    this.isAuth.next(false);
    localStorage.removeItem('access_token');
  }

  getAuthentication(): Observable<boolean> {
    return this.isAuth;
  }

  getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }
}
