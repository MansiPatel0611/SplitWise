import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class FriendService {

  constructor(private http: HttpClient) {
  }
  getFriendData(id: number) {
    return this.http.get("api/Friend/getFriendData/" + id);
  }
  addNewFriend(userid: number, name: string, email: string) {
    return this.http.get("api/Friend/addFriend/" + userid + "/" + name + "/" + email);
  }
  removeFriend(userid: number, friendid: number) {
    return this.http.delete("api/Friend/removeFriend/" + userid + "/" + friendid);
  }
  addFriend(userid: number, friendid: number) {
    return this.http.post("api/Friend/addNewFriend/", userid + "/" + friendid);
  }
}
