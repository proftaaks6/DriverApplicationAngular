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

  invoices: Invoice[] = null;

  constructor(private invoiceService: InvoiceService, private router: Router) { }

  async ngOnInit() {
    this.invoices = await this.invoiceService.getInvoicesByUserId();
    this.invoices.forEach(invoice => {
      invoice.date = invoice.date.substring(0, invoice.date.length - 5);
    })
  }

  showInvoice(invoice: Invoice) {
    this.router.navigateByUrl(`invoice/showinvoice/${invoice.id}`);
  }
}
