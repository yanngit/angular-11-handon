import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {AuthService} from '../services/auth.service';

/*Export this to a service*/
const ACTION_ALLUMER = 'allumer';
const ACTION_ETEINDRE = 'eteindre';


@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  action = ACTION_ALLUMER;
  appareils: any[];

  constructor(private appareilService: AppareilService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.appareils = this.appareilService.getAppareils();
  }

  onAllumer(): void {
    this.appareilService.switchOnAll();
    this.action = ACTION_ETEINDRE;
  }

  onEteindre(): void {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
      this.action = ACTION_ALLUMER;
    }
  }

  getActionText(): string {
    return this.action === ACTION_ALLUMER ? 'Tout allumer' : 'Tout eteindre';
  }

  getActionAllumer(): string {
    return ACTION_ALLUMER;
  }

}
