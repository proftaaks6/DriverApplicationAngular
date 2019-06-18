import {PriceRowList} from './priceRowList.model';

export class Invoice {
  id: number;
  date: Date;
  isPaid: boolean;
  totalPrice: number;
  totalDistance: number;
  vehicleChassis: string;
  priceRowList: PriceRowList[];
}
