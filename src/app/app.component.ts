import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Yann test';
  isAuthenticated = false;

  constructor() {
    setTimeout(
      () => {
        this.isAuthenticated = true;
      }, 4000
    );
  }

  onAllumer(): void {
    console.log('On allume tout !');
  }
}
