import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
import { LoginComponent } from './components/login/login.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: 'invoice',
    pathMatch: 'full'
  },
  {
    path: 'invoice', 
    loadChildren: './components/invoice/invoice.module#InvoiceModule',
    canActivate: [AuthGuard]
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
