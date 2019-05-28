import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class InvoiceService {

  constructor(private http: HttpClient) {}

  async getInvoices(unparsedVehicleIds: number) {
    return await this.http.get(environment.invoiceSystemUrl + 'invoicesystem/vehicle/' + unparsedVehicleIds).toPromise();
  }

  async getInvoicesById(id: number) {
    return await this.http.get(environment.invoiceSystemUrl + 'id/' + id).toPromise();
  }

  async getUserById(id: number) {
    return this.http.get(environment.userSystemUrl + 'users/' + id).toPromise();
  }

  async payInvoice(invoiceid: number){
    return this.http.get(environment.invoiceSystemUrl + 'markAsPaid/' + invoiceid).toPromise();
  }
}
