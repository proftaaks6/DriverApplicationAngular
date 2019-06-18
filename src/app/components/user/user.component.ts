import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/models/user.model';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user : User;
  constructor(private userService: UserService) { }

  async ngOnInit() {
    this.user = await this.userService.getMe();
    console.log(this.user);
  }

}
