import { User } from '../models/User.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  private registerRoute = '/users';

  register(user: User): Observable<any> {
    return this.httpClient.post(environment.backendUrl + this.registerRoute, {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}
