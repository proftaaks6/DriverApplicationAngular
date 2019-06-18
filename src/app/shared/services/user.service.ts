import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {User} from '../models/user.model';
import {Invoice} from '../models/invoice.model';
import {Vehicle} from '../models/vehicle.model';

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private http: HttpClient) {}

  async getMe() : Promise<User> {
    return this.http.get<User>(environment.driverApplicationUrl + `me`).toPromise();
  }

}
