import { Component, OnInit } from '@angular/core';
import {Invoice} from '../../shared/models/invoice.model';
import {InvoiceService} from '../../shared/services/invoice.service';
import {Router} from '@angular/router';
import {User} from '../../shared/models/user.model';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  invoices: Invoice[] = [];
  user: User = null;

  constructor(private invoiceService: InvoiceService, private router: Router) { }

  async ngOnInit() {
    // @ts-ignore
    this.user = await this.invoiceService.getUserById(0);
    this.invoices = this.user.invoices;
  }

  showInvoice(invoice: Invoice) {
    this.router.navigate(['invoice/showinvoice'], {queryParams: {userId: this.user.id, invoiceId: invoice.id}});
  }
}
