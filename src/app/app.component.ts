import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  secondes: number;
  counterSubscription: Subscription;
  isAuth: boolean;
  constructor(private authService: AuthService) {
    authService.getAuthentication().subscribe((data) => {
      this.isAuth = data;
    });
  }

  ngOnInit(): void {
    const counter = interval(1000);
    const slowedCounter = counter.pipe(throttleTime(5000));
    this.counterSubscription = slowedCounter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }
}
