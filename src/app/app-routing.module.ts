import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppareilViewComponent} from './appareil-view/appareil-view.component';
import {AuthComponent} from './auth/auth.component';
import {SingleAppareilViewComponent} from './single-appareil-view/single-appareil-view.component';
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component';

const routes: Routes = [
  { path: 'appareils', component: AppareilViewComponent },
  { path: 'appareils/:id', component: SingleAppareilViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
