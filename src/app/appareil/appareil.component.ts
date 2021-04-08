import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() name: string;
  @Input() status: string;
  lastUpdate = new Promise<Date>((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor() {
  }

  getLiClass(): object {
    return {'list-group-item': true,
      'list-group-item-success': this.isAllume(),
      'list-group-item-danger': !this.isAllume()
    };
  }

  ngOnInit(): void {
  }

  isAllume(): boolean {
    return this.status === AppareilService.STATUS_ALLUME;
  }

  getColor(): string {
    if (this.status === AppareilService.STATUS_ALLUME) {
      return 'green';
    } else {
      return 'red';
    }
  }

  updated(): void {
    this.lastUpdate = new Promise<Date>((resolve, reject) => {
      const date = new Date();
      resolve(date);
    });

  }

}
