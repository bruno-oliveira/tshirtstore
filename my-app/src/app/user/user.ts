//Role NEEDS to be an enum!!!!!!!
import {Role} from './role';
export class User {
name: string;
username: string;
password: string;
role: Role;
constructor(name, username,password, role) {
      this.name = name;
      this.username = username;
      this.password = password;
      this.role=role;
    }
}
