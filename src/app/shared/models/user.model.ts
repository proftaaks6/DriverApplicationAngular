import {Invoice} from './invoice.model';

export class User {
  id: number;
  name: string;
  address: string;
  residence: string;
  invoices: Invoice[];
  email: string;
}
