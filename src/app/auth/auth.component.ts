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

  constructor(private authService: AuthService, private router: Router) {
    this.authService.getAuthentication().subscribe((data) => {
      this.isAuth = data;
    });
  }

  ngOnInit(): void {
    if (this.isAuth && this.router.url === '/') {
      this.router.navigate(['programs']);
    }
  }

  onSubmitForm(form: NgForm): void {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signIn(email, password).subscribe(
      () => {
        this.router.navigate(['programs']);
      },
      (err) => {
        this.errorMessage = err.error.message;
      }
    );
  }

  signOut(): void {
    this.authService.signOut();
  }
}
