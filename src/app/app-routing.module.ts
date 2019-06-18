import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
import { LoginComponent } from './components/login/login.component'
import {OverviewComponent} from './components/vehicle/overview/overview.component';
import {UserComponent} from './components/user/user.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: './components/index/index.module#IndexModule',
  },
  {
    path: 'invoice',
    loadChildren: './components/invoice/invoice.module#InvoiceModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'vehicle',
    component: OverviewComponent
  },
  {
    path: 'me',
    component: UserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
