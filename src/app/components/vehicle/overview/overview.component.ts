import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../../../shared/services/vehicle.service';
import {Vehicle} from '../../../shared/models/vehicle.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  vehicles: Vehicle[] = null;

  constructor(private vehicleService : VehicleService) { }

  async ngOnInit() {
    this.vehicles = await this.vehicleService.getAllVehicles();
    this.vehicles.forEach(vehicle => {
      vehicle.startDate = vehicle.startDate.substring(0, vehicle.startDate.length - 5);
      vehicle.endDate = vehicle.endDate.substring(0, vehicle.endDate.length - 5);
    })
  }

}
