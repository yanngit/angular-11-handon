import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import { SingleAppareilViewComponent } from './single-appareil-view/single-appareil-view.component';
import { NotFoundComponent } from './four-oh-four/not-found.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ProgramViewComponent } from './program-view/program-view.component';
import { ProgramAddComponent } from './program-add/program-add.component';

const routes: Routes = [
  /*{
    path: 'appareils',
    canActivate: [AuthGuard],
    component: AppareilViewComponent,
  },
  {
    path: 'appareils/:id',
    canActivate: [AuthGuard],
    component: SingleAppareilViewComponent,
  },
  { path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent },
  { path: 'new-user', component: NewUserComponent },*/
  { path: 'auth', component: AuthComponent },
  { path: '', component: AuthComponent },
  {
    path: 'programs',
    canActivate: [AuthGuard],
    component: ProgramViewComponent,
  },
  {
    path: 'programs/add',
    canActivate: [AuthGuard],
    component: ProgramAddComponent,
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
