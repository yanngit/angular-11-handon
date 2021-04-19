import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ServiceResponse } from './service-response';

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  private isAuth = false;
  private accessToken: string;
  private loginRoute = '/auth/login';

  signIn(email: string, password: string): Observable<any> {
    const observableResponse = this.httpClient.post<{ access_token: string }>(
      environment.backendUrl + this.loginRoute,
      {
        email,
        password,
      }
    );

    observableResponse.subscribe((data) => {
      this.isAuth = true;
      this.accessToken = data.access_token;
      return {
        success: true,
      };
    });

    return observableResponse;
  }

  signOut(): void {
    this.isAuth = false;
  }

  isAuthenticated(): boolean {
    return this.isAuth;
  }
}
