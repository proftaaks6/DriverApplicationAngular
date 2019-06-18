import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {User} from '../models/user.model';
import {Invoice} from '../models/invoice.model';
import {Vehicle} from '../models/vehicle.model';

@Injectable({providedIn: 'root'})
export class VehicleService {

  constructor(private http: HttpClient) {}

  async getAllVehicles() : Promise<Vehicle[]> {
    return this.http.get<Vehicle[]>(environment.driverApplicationUrl + `me/vehicles`).toPromise();
  }

}
