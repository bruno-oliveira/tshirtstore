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
export class AppComponent  implements OnInit{

    userFromApi: User;
    userRole: any = Role;

    constructor(private userService: UserService, private loginService: LoginService, private router: Router){
      if(localStorage.getItem('token') !== null){
      this.userService.get_user(atob(localStorage.getItem('token')).split(":")[0])
      .subscribe((res : User)=>{ console.log(res);
      this.userFromApi = res;
      });                                                                                                     }
      console.log(this.userFromApi);
    }

    ngOnInit(){
    if(localStorage.getItem('token') !== null){
    console.log("Inside init");
    this.router.navigate(['productList']);
    }
    }

        logout(){
        console.log("Invoking logout");
        this.loginService.logout();
        this.userFromApi = null;

        }

}
