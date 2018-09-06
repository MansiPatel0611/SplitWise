import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group, CreateGroupResponse } from '../Models/Model';
@Injectable()
export class GroupService {

  constructor(private http: HttpClient) {
  }
  CreateGroup(group: CreateGroupResponse) {
    return this.http.post("api/Group/addGroup", group);
  }

  getFriendGroups(userid: number, friendid: number) {
    return this.http.get("api/Group/getFriendGroups/" + userid + "/" + friendid);
  }
  GetGroupInfo(id: any) {
    return this.http.get("api/Group/getGroupData/" + id);
  }
  addGroupMember(userid: number, groupid: number) {
    return this.http.get("api/GroupMember/addMember" + "/" + userid + "/" + groupid);
  }
  removeGroupMember(userid: number, groupid: number) {
    return this.http.delete("api/GroupMember/deleteMember/" + userid + "/" + groupid);
  }
  updateGroup(groupid: number, group: Group) {
    return this.http.put("api/Group/updateGroup/" + groupid, group);
  }
  deleteGroup(id: number) {
    return this.http.delete("api/Group/deleteGroup/" + id);
  }
}
