import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../Services/UserService';
import { FriendResponse, GroupMember, CreateGroupResponse } from '../Models/Model';
import { GroupService } from '../Services/GroupService';


@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, public user_service: UserService, public group_service: GroupService) { }
  pmid: any;
  //AddButton: boolean = false;
  //RemoveButton: boolean = true;
  friends: FriendResponse[];
  public newGroup = new CreateGroupResponse();
  groupmemberid: GroupMember[] = [];
  groupmember: any[] = [];
  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.pmid = params['id']
    });
    this.user_service.getFriends(this.pmid)
      .subscribe((data: FriendResponse[]) => {
        this.friends = data
      })

    var member = new GroupMember();
    member.userid = this.pmid;
    this.groupmemberid.push(member);
  }


  addclick(friend: FriendResponse) {
   // console.log(friend);
    var flag = 0;
    for (var x = 0; x < this.groupmemberid.length; x++) {
      if (this.groupmemberid[x].userid == friend.userid)
        flag = 1;
    }
    if (flag == 0) {
      var member = new GroupMember();
      member.userid = friend.userid
      this.groupmemberid.push(member);
      this.groupmember.push(friend.user_name);
    }
      

    console.log(this.groupmemberid);
  }
  removeclick(friend: FriendResponse) {
    //console.log(friend);
    var flag = 0;
    var index;
    for (var x = 0; x < this.groupmemberid.length; x++) {
      if (this.groupmemberid[x].userid == friend.userid) {
        flag = 1;
        index = x;
      }
        
    }
    if (flag == 1) {
      this.groupmemberid.splice(index, 1);
      this.groupmember.splice(index-1, 1);
    }

    console.log(this.groupmemberid);
  }

  onSubmit() {
    this.newGroup.group_created_by = this.pmid;
    this.newGroup.groupMembers = this.groupmemberid;
    this.newGroup.is_simplified_depts = false;
    console.log(this.newGroup);
    this.group_service.CreateGroup(this.newGroup)
      .subscribe(data => console.log(data));
    this.router.navigate(['/Board', this.pmid])
  }
  //addclick() {
  // // console.log(friend);
  //  this.AddButton = true;
  //  this.RemoveButton = false
  //  [disabled] = "AddButton"
  //}
  //removeclick() {
  //  this.RemoveButton = true;
  //  this.AddButton = false
  //  [disabled] = "RemoveButton"
  //}
  }
