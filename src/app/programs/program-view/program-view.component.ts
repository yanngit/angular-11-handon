import {Component, OnInit} from '@angular/core';
import {ProgramService} from '../program.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-program-view',
  templateUrl: './program-view.component.html',
  styleUrls: ['./program-view.component.scss'],
})
export class ProgramViewComponent implements OnInit {
  programs: any[];

  constructor(private programService: ProgramService, private router: Router) {
    this.loadData();
  }

  ngOnInit(): void {
  }

  loadData(): void {
    this.programService.getAllPrograms().subscribe(
      (data) => {
        console.log(data);
        this.programs = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
