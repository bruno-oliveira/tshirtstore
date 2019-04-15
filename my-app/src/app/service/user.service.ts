import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user/user';
import { Role } from '../user/role';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
   baseUrl:string = "http://localhost:8090";

   private users : User[] = [];

  constructor(private httpClient : HttpClient) {
      this.users.push(new User("bruno","bruno","bruno123", Role.NORMAL));
  }

  get_users(){
    return this.users;
  }

  get_user(name){

   return this.httpClient.get(this.baseUrl + '/showUserByName/'+name)
   //console.log(this.users[0]);
   //   return this.users[0];

    }

    }
