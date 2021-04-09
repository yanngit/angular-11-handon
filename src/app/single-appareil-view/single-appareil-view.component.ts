import { Component, OnInit } from '@angular/core';
import {componentFactoryName} from '@angular/compiler';
import {AppareilService} from '../services/appareil.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-appareil-view',
  templateUrl: './single-appareil-view.component.html',
  styleUrls: ['./single-appareil-view.component.scss']
})
export class SingleAppareilViewComponent implements OnInit {
  name: string;
  status: string;
  constructor(private appareilService: AppareilService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const appareilId = this.route.snapshot.params.id;
    const appareil =  this.appareilService.getAppareil(+appareilId);
    this.name = appareil.name;
    this.status = appareil.status;
  }

}
