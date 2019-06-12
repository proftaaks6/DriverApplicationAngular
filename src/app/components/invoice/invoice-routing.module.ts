import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {InvoiceComponent} from './invoice.component';
import {ShowInvoiceComponent} from './show-invoice/show-invoice.component';

const routes: Routes = [
  {path: '', component: InvoiceComponent},
  {path: 'showinvoice/:id', component: ShowInvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InvoiceRoutingModule {}
