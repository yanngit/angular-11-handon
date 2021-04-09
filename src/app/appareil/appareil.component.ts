import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';

const ACTION_ALLUMER = 'allumer';
const ACTION_ETEINDRE = 'eteindre';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() name: string;
  @Input() status: string;
  @Input() index: number;
  @Input() id: number;
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
    /*here the condition is reversed compared to the init condition because we are computing the text that is going to be rendered
    after the switch.
    Tricky and can be avoided with ngOnChange to recompute the button text once the switch changes are propagated.
    In that case the condition will be the same as the one used in ngOnInit.*/
    this.buttonSwitchText = this.status === AppareilService.STATUS_ALLUME ?  ACTION_ALLUMER : ACTION_ETEINDRE;
    if (this.status === AppareilService.STATUS_ALLUME) {
      this.appareilService.switchOffOne(this.index);
    } else if (this.status ===  AppareilService.STATUS_ETEINT) {
      this.appareilService.switchOnOne(this.index);
    }
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
