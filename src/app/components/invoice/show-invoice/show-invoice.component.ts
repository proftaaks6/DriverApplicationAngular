import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Invoice} from '../../../shared/models/invoice.model';
import {__await} from 'tslib';
import {InvoiceService} from '../../../shared/services/invoice.service';
import {User} from '../../../shared/models/user.model';

@Component({
  selector: 'app-show-invoice',
  templateUrl: './show-invoice.component.html',
  styleUrls: ['./show-invoice.component.scss']
})
export class ShowInvoiceComponent implements OnInit {

  invoice: Invoice = null;
  user: User = null;
  constructor(private route: ActivatedRoute, private invoiceService: InvoiceService) { }

  async ngOnInit() {
    // @ts-ignore
    const invoiceId: number = await this.route.snapshot.paramMap.get('invoiceId');
    // @ts-ignore
    const userId: number = await this.route.snapshot.paramMap.get('userId');
    // @ts-ignore
    this.invoice = await this.invoiceService.getInvoicesById(invoiceId);
    // @ts-ignore
    this.user = await this.invoiceService.getUserById(userId);
    console.log(this.invoice);
  }

  async payInvoice(invoiceId: number) {
    await this.invoiceService.payInvoice(invoiceId);
  }
}
