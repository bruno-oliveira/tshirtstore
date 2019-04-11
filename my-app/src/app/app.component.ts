import { Component } from '@angular/core';
import { UserService } from './user/user.service';
import { User } from './user/user';
import { Role } from './user/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

    userFromApi: User;
    userRole: any = Role;

    constructor(private userService: UserService){
    this.userFromApi = this.userService.get_user();
        }

}
