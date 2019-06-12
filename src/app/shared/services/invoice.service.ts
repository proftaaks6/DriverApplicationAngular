import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { ClientUser } from '../models/clientUser.model';
import { Invoice } from '../models/invoice.model';

@Injectable({providedIn: 'root'})
export class InvoiceService {

  constructor(private http: HttpClient) {}

  async getInvoices(ownedVehicles: string[]): Promise<Invoice[]> {
    let parsedVehicleIds = ownedVehicles.join(',');
    return await this.http.get<Invoice[]>(environment.invoiceSystemUrl + 'invoicesystem/vehicle/' + parsedVehicleIds).toPromise();
  }

  async getInvoicesById(id: number): Promise<Invoice> {
    return await this.http.get<Invoice>(environment.invoiceSystemUrl + 'invoicesystem/id/' + id).toPromise();
  }

  async getByUserId(id: number): Promise<Invoice[]> {
    let user = await this.http.get<ClientUser>(environment.userSystemUrl + 'usersystem/users/' + id).toPromise();
    return this.getInvoices(user.ownedVehicles);
  }

  async payInvoice(invoiceid: number){
    return this.http.get(environment.invoiceSystemUrl + 'invoicesystem/markAsPaid/' + invoiceid).toPromise();
  }

  async getInvoicesForUser(): Promise<Invoice[]> {
    return this.http.get<Invoice[]>(environment.driverApplicationUrl + 'driverapplication/getInvoices').toPromise();
  }
}
