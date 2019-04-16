import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { LoginService } from './service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
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

    constructor(private userService: UserService, private loginService: LoginService, private router: Router,private activatedRoute:ActivatedRoute){

    }

}
