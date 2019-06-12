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

  constructor(private invoiceService: InvoiceService, private router: Router) { }

  async ngOnInit() {
    this.invoices = await this.invoiceService.getInvoicesForUser();
    console.log(this.invoices);
  }

  showInvoice(invoice: Invoice) {
    this.router.navigateByUrl('invoice/showinvoice/' + invoice.id);
  }
}
