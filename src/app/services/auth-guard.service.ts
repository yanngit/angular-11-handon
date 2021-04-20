import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
  private isAuth: boolean;
  constructor(private authService: AuthService, private router: Router) {
    authService.getAuthentication().subscribe((data) => {
      this.isAuth = data;
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isAuth) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
