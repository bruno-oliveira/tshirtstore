import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { LoginService } from '../service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user/user';
import { Role } from '../user/role';

@Component({
  selector: 'header-bar',
  templateUrl: './headerBar.component.html',
  styleUrls: [],
})
export class HeaderBarComponent {

    userFromApi: User;
    userRole: any = Role;

    constructor(private userService: UserService, private loginService: LoginService, private router: Router,private activatedRoute:ActivatedRoute){
      if(localStorage.getItem('token') !== null){
      this.userService.get_user(atob(localStorage.getItem('token')).split(":")[0])
      .subscribe((res : User)=>{ console.log(res);
      this.userFromApi = res;

      });}};

  logout(){
        console.log("Invoking logout");
        this.loginService.logout();
        this.userFromApi = null;

        }
        }
