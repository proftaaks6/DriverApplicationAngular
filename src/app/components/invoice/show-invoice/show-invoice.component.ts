import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Invoice} from '../../../shared/models/invoice.model';
import {__await} from 'tslib';
import {InvoiceService} from '../../../shared/services/invoice.service';
import {User} from '../../../shared/models/user.model';
import {LocationPoint} from '../../../shared/models/locationPoint.model';

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
    this.route.params.subscribe(async x => {
      const invoiceId = x.id;
      this.invoice = await this.invoiceService.getInvoice(invoiceId);
      this.invoice.date = this.invoice.date.substring(0, this.invoice.date.length - 5);
      this.paths = ([].concat(...this.invoice.priceRowList.map(x=>x.locationPoints)));
      this.ngOnChanges();

      console.log(this.invoice);
    });
  }

  paths: Array<LocationPoint>;

  lat: number = 52.092876;
  long: number = 5.104480;
  zoom: number = 9;

  async ngOnChanges() {
    let minLat, minLong, maxLat, maxLong;
    let didFirst = false;

    if (this.paths.length > 0) {
      this.paths.forEach(point => {
        if (!didFirst) {
          minLat = point.latitude;
          maxLat = point.latitude;
          minLong = point.longitude;
          maxLong = point.longitude;
          return;
        }

        if (point.latitude < minLat) {
          minLat = point.latitude;
        }
        if (point.latitude > maxLat) {
          maxLat = point.latitude;
        }
        if (point.longitude < minLong) {
          minLong = point.longitude;
        }
        if (point.longitude > maxLong) {
          maxLong = point.longitude;
        }
      });

      this.long = (minLat + maxLat) / 2;
      this.lat = (minLong + maxLong) / 2;
    }
  }


  async pay() {
    await this.invoiceService.payInvoice(this.invoice.id);
    window.location.reload();
  }
}
