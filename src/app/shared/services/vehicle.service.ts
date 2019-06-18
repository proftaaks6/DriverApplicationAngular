import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {User} from '../models/user.model';
import {Invoice} from '../models/invoice.model';

@Injectable({providedIn: 'root'})
export class InvoiceService {

  constructor(private http: HttpClient) {}

  async getInvoice(invoiceId: number) : Promise<Invoice> {
    return this.http.get<Invoice>("http://www.json-generator.com/api/json/get/bPYNWOnEHS?indent=2").toPromise();
  }

  async getInvoicesByUserId(id: number, chassis: string[]) : Promise<Invoice[]>{
    ///user/{userId}/vehicles/{vehicleIds}

    return this.http.get<Invoice[]>("http://www.json-generator.com/api/json/get/cefQNqrUya?indent=2").toPromise();
    //return await this.http.get(environment.invoiceSystemUrl + 'user/' + id +'/vehicles'/chassis.join(",")).toPromise();
  }

  async getUserById(id: number) : Promise<User> {
    return this.http.get<User>("http://www.json-generator.com/api/json/get/cfpyOvEHeG?indent=2").toPromise();
    //return this.http.get(environment.userSystemUrl + 'users/' + id).toPromise();
  }

  async payInvoice(invoiceid: number){
    return this.http.get(environment.invoiceSystemUrl + 'markAsPaid/' + invoiceid).toPromise();
  }
}
