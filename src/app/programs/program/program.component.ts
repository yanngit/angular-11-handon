import {Component, EventEmitter, Injectable, Input, OnInit, Output} from '@angular/core';
import {ProgramService} from '../program.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
})
@Injectable()
export class ProgramComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() nbLots: string;
  @Output() itemDeleted = new EventEmitter<boolean>();

  errorMessage: string;

  constructor(private programService: ProgramService, private router: Router) {
  }

  ngOnInit(): void {
  }

  delete(): void {
    this.programService.deleteProgram(this.id).subscribe(
      (data) => {
        alert('Programme supprime');
        this.itemDeleted.emit(true);
      },
      (err) => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
