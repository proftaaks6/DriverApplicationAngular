import {NgModule} from '@angular/core';
import {InvoiceComponent} from './invoice.component';
import {CommonModule} from '@angular/common';
import {InvoiceRoutingModule} from './invoice-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ShowInvoiceComponent } from './show-invoice/show-invoice.component';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    InvoiceComponent,
    ShowInvoiceComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCtRlXHmPwNJ0hHyd2EFNldqWu1Q9y8aHk'
    })
  ]
})
export class InvoiceModule { }
