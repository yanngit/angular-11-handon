import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsRoutingModule } from './programs-routing.module';
import { ProgramViewComponent } from './program-view/program-view.component';
import { ProgramAddComponent } from './program-add/program-add.component';
import { ProgramComponent } from './program/program.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgramService } from './program.service';

@NgModule({
  declarations: [ProgramViewComponent, ProgramAddComponent, ProgramComponent],
  imports: [CommonModule, ReactiveFormsModule, ProgramsRoutingModule],
  providers: [ProgramService],
})
export class ProgramsModule {}
