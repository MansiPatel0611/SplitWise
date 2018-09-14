import { Component, OnInit } from '@angular/core';
import { FriendResponse, CreateGroupResponse, CommonResponse, User } from '../Models/Model';
import { UserService } from '../Services/UserService';
import { ActivatedRoute, Router } from '@angular/router';
import { FriendService } from '../Services/FriendService';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  id: number;
  constructor(private router: Router, private user_service: UserService, private friend_service: FriendService, private route: ActivatedRoute) { }

  friends: FriendResponse[];
  groups: CreateGroupResponse[];
  public user = new User();
  frd_name: string;
  frd_email: string;
  Label: string;
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.user_service.getFriends(this.id).subscribe
      ((data: FriendResponse[]) => {
        this.friends=data
        //  console.log(data),
         // console.log(this.friends)
      });
    this.user_service.getGroups(this.id).subscribe
      ((data: CreateGroupResponse[]) => {
        this.groups = data
          //console.log(data),
          //console.log(this.groups)
      });
    //console.log(this.friends);
    //console.log(this.groups);

    this.user_service.getUserData(this.id)
      .subscribe((data: User) => this.user = data);
  }
  onSubmit() {
    console.log(this.frd_name);
    console.log(this.frd_email);
    this.friend_service.addNewFriend(this.id, this.frd_name, this.frd_email)
      .subscribe(
      (data: CommonResponse) => {
        console.log(data),
          this.Label = "hide",
          alert("Successfully Added a new friend"),
          this.router.navigate(['/Board', this.id])
      },
      error => {
        alert("user does not exist");
        this.frd_name = null;
        this.frd_email = null;

      });
  }
  logout() {
    if (confirm("Are you sure you want to log out?")) {
      this.router.navigate(['/home'])
    }
  }
}
