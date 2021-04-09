import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isAuth: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isAuth = this.authService.isAuthenticated();
  }

  buttonAction(): void {
    this.isAuth ?  this.authService.signOut().then(() => {
      console.log('Sign out successful');
      this.isAuth = false;
    }) : this.authService.signIn().then(() => {
      console.log('Sign in successful');
      this.isAuth = true;
      this.router.navigate(['appareils']);
    });
  }

  buttonText(): string {
    return this.isAuth ? 'Sign out' : 'Sign in';
  }
}
