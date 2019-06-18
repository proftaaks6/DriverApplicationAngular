import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {User} from '../models/user.model';
import {Invoice} from '../models/invoice.model';

@Injectable({providedIn: 'root'})
export class InvoiceService {

  constructor(private http: HttpClient) {}

  async getInvoice(invoiceId: number) : Promise<Invoice> {
    return this.http.get<Invoice>(environment.driverApplicationUrl + `me/invoices/${invoiceId}`).toPromise();
  }

  async getInvoicesByUserId() : Promise<Invoice[]>{
    return this.http.get<Invoice[]>(environment.driverApplicationUrl + `me/invoices`).toPromise();
  }

  async payInvoice(invoiceId: number){
    return this.http.post(environment.driverApplicationUrl + `me/invoices/${invoiceId}/pay`, {}).toPromise();
  }
}
