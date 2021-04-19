import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isAuth: boolean;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isAuth = this.authService.isAuthenticated();
  }

  onSubmitForm(form: NgForm): void {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signIn(email, password).subscribe(
      (data: { access_token: string }) => {
        console.log(data);
        this.isAuth = true;
        this.router.navigate(['appareils']);
      },
      (err) => {
        this.errorMessage = err.error.message;
      }
    );
  }

  buttonText(): string {
    return this.isAuth ? 'Sign out' : 'Sign in';
  }
}
