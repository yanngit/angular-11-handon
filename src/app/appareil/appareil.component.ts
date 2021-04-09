import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';

const ACTION_ALLUMER = 'allumer';
const ACTION_ETEINDRE = 'eteindre';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit, OnChanges {

  @Input() name: string;
  @Input() status: string;
  @Input() index: number;
  lastUpdate = new Promise<Date>((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  buttonSwitchText: string;

  constructor(private appareilService: AppareilService) {
  }

  ngOnInit(): void {
    this.buttonSwitchText = this.status === AppareilService.STATUS_ALLUME ? ACTION_ETEINDRE : ACTION_ALLUMER;
  }

  onSwitch(): void {
    if (this.status === AppareilService.STATUS_ALLUME) {
      this.appareilService.switchOffOne(this.index);
    } else if (this.status ===  AppareilService.STATUS_ETEINT) {
      this.appareilService.switchOnOne(this.index);
    }
  }

  ngOnChanges(): void {
    this.buttonSwitchText = this.status === AppareilService.STATUS_ALLUME ? ACTION_ETEINDRE : ACTION_ALLUMER;
  }

  getLiClass(): object {
    return {'list-group-item': true,
      'list-group-item-success': this.isAllume(),
      'list-group-item-danger': !this.isAllume()
    };
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
