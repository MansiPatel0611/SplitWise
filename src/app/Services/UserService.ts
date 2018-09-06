import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/Model';
@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }
  user: any;
  setuser(user: any) {
    this.user = user;
  }
  updateUser(user: User) {
    return this.http.put("api/User/updateUser/" + user.userid, user);
  }
  getUserData(id: number) {
    return this.http.get("api/User/getUser/" + id);
  }
  getUser(uname: string, password: string) {
    return this.http.get("/api/User/login" + "/" + uname + "/" + password);
  }
  register(username: string, email: string, password: string) {
    return this.http.get("/api/User/Register" + "/" + username + "/" + email + "/" + password);
  }
  getFriends(id: number) {
    return this.http.get("api/Friend/getFriend/" + id);
  }
  getGroups(id: number) {
    return this.http.get("api/Group/getGroups/" + id);
  }
}
