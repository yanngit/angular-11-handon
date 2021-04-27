import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth-guard.service';
import { ProgramViewComponent } from './program-view/program-view.component';
import { ProgramAddComponent } from './program-add/program-add.component';

const routes: Routes = [
  {
    path: 'programs',
    canActivate: [AuthGuard],
    component: ProgramViewComponent,

  },
  {
    path: 'programs/add',
    canActivate: [AuthGuard],
    component: ProgramAddComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramsRoutingModule {}
