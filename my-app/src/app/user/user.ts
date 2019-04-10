//Role NEEDS to be an enum!!!!!!!
export class User {
name: string;
username: string;
password: string;
role: string;
constructor(name, username,password, role) {
      this.name = name;
      this.username = username;
      this.password = password;
      this.role=role;
    }
}
