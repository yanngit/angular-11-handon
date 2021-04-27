import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProgramService} from '../program.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-program-add',
  templateUrl: './program-add.component.html',
  styleUrls: ['./program-add.component.scss'],
})
export class ProgramAddComponent implements OnInit {
  programForm: FormGroup;
  errorMessage: string;

  constructor(
    private programService: ProgramService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.programForm = this.formBuilder.group({
      name: ['', Validators.required],
      nbLots: [0, [Validators.required]],
    });
  }

  onSubmitForm(): void {
    const name = this.programForm.value.name;
    const nbLots = this.programForm.value.nbLots;
    this.programService.addProgram(name, nbLots).subscribe(
      (data) => {
        this.router.navigate(['/programs']);
      },
      (err) => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
