import { Component } from '@angular/core';
import { UserService } from './service/user.service';
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
    this.userService.get_user(atob(localStorage.getItem('token')).split(":")[0]).subscribe((res : User)=>{
                                                                                                         console.log(res);
                                                                                                         this.userFromApi = res;});
     console.log(this.userFromApi);
        }

}
