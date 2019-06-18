import {PriceRowList} from './priceRowList.model';

export class Invoice {
  id: number;
  date: string;
  paid: boolean;
  totalPrice: number;
  totalDistance: number;
  vehicleChassis: string;
  priceRowList: PriceRowList[];
}
