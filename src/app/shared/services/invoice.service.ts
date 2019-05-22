import {Injectable} from '@angular/core';

const users = [
  {
    id: 1084,
    name: 'Reed Cooke',
    address: '838 Eastern Parkway',
    residence: 'Guilford',
    invoices: [
      {
        id: 7401,
        vehicleId: 5005,
        totalDistance: 4619.78,
        totalPrice: 6866.97,
        isPaid: true,
        date: '2018-12-08T10:05:52 -01:00'
      },
      {
        id: 4898,
        vehicleId: 9012,
        totalDistance: 5034.93,
        totalPrice: 8631.56,
        isPaid: true,
        date: '2019-02-20T07:27:20 -01:00'
      },
      {
        id: 6747,
        vehicleId: 5319,
        totalDistance: 5109.89,
        totalPrice: 8440.03,
        isPaid: false,
        date: '2016-07-08T01:21:02 -02:00'
      }
    ],
    email: 'reedcooke@geologix.com'
  },
  {
    id: 5006,
    name: 'Whitney Barrett',
    address: '207 Fleet Place',
    residence: 'Gasquet',
    invoices: [
      {
        id: 953,
        vehicleId: 227,
        totalDistance: 8215.06,
        totalPrice: 4952.7,
        isPaid: false,
        date: '2017-12-20T12:57:52 -01:00'
      },
      {
        id: 6565,
        vehicleId: 1261,
        totalDistance: 1778.36,
        totalPrice: 9536.19,
        isPaid: false,
        date: '2017-12-28T05:53:43 -01:00'
      },
      {
        id: 2389,
        vehicleId: 770,
        totalDistance: 9537.38,
        totalPrice: 6222.39,
        isPaid: true,
        date: '2017-11-22T02:14:06 -01:00'
      }
    ],
    email: 'whitneybarrett@geologix.com'
  },
  {
    id: 1162,
    name: 'Serena Maxwell',
    address: '977 Monitor Street',
    residence: 'Albany',
    invoices: [
      {
        id: 9065,
        vehicleId: 9000,
        totalDistance: 4371,
        totalPrice: 898.85,
        isPaid: false,
        date: '2014-05-30T12:51:38 -02:00'
      },
      {
        id: 3160,
        vehicleId: 811,
        totalDistance: 7814.4,
        totalPrice: 8008.97,
        isPaid: false,
        date: '2017-12-16T07:01:46 -01:00'
      },
      {
        id: 5024,
        vehicleId: 6650,
        totalDistance: 5577.07,
        totalPrice: 380.37,
        isPaid: true,
        date: '2015-08-23T04:06:14 -02:00'
      }
    ],
    email: 'serenamaxwell@geologix.com'
  },
  {
    id: 3174,
    name: 'Chrystal Winters',
    address: '501 McKibben Street',
    residence: 'Outlook',
    invoices: [
      {
        id: 6378,
        vehicleId: 3580,
        totalDistance: 2369.75,
        totalPrice: 9299.04,
        isPaid: false,
        date: '2015-03-17T12:54:11 -01:00'
      },
      {
        id: 9443,
        vehicleId: 1229,
        totalDistance: 8059.62,
        totalPrice: 3355.22,
        isPaid: true,
        date: '2018-09-24T02:08:33 -02:00'
      },
      {
        id: 1500,
        vehicleId: 8410,
        totalDistance: 9224.87,
        totalPrice: 565.93,
        isPaid: true,
        date: '2017-01-12T03:12:40 -01:00'
      }
    ],
    email: 'chrystalwinters@geologix.com'
  },
  {
    id: 4593,
    name: 'Francesca West',
    address: '528 Livonia Avenue',
    residence: 'Corinne',
    invoices: [
      {
        id: 5806,
        vehicleId: 8731,
        totalDistance: 9711.42,
        totalPrice: 1097.93,
        isPaid: true,
        date: '2018-01-26T03:07:25 -01:00'
      },
      {
        id: 5887,
        vehicleId: 5145,
        totalDistance: 5255,
        totalPrice: 8033.04,
        isPaid: false,
        date: '2014-04-07T12:37:01 -02:00'
      },
      {
        id: 7820,
        vehicleId: 1129,
        totalDistance: 918.14,
        totalPrice: 6499.93,
        isPaid: true,
        date: '2014-11-18T08:53:38 -01:00'
      }
    ],
    email: 'francescawest@geologix.com'
  }
];

@Injectable({providedIn: 'root'})
export class InvoiceService {

  constructor() {}

  async getInvoices(userId: number) {
    return users[0].invoices;
  }

  async getInvoicesById(id: number) {
    return users[0].invoices[0];
  }

  async getUserById(id: number) {
    return users[0];
  }
}
