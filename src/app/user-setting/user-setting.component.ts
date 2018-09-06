import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../Models/Model';
import { UserService } from '../Services/UserService';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.css']
})
export class UserSettingComponent implements OnInit {

  constructor(private route: ActivatedRoute, private user_service: UserService) { }

  userid: any;
  public user = new User();
  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.userid = params['id']
    });
  //  console.log(this.userid);
    this.user_service.getUserData(this.userid)
      .subscribe((data: User) => this.user = data);
  }
  onSubmit() {
    this.user_service.updateUser(this.user).subscribe(
      (data: User) => {
        this.user = data
      },
      error =>
        alert("operation failed")
    );

  }
}
