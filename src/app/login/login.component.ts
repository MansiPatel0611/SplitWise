import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/UserService';
import { User, CommonResponse } from '../Models/Model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user_service: UserService, private router: Router) { }
  public user = new User();
  public id: any;
  ngOnInit() {
  }
  onSubmit() {
    //console.log(this.user);
    this.user_service.getUser(this.user.email_id, this.user.password)
      .subscribe(
      (result: CommonResponse) => {
        this.id = result.id
        console.log(this.id)
        this.user_service.setuser(this.id);
        this.router.navigate(['/Board', this.id])
      },
        error => {
          alert("Incorrect check id or password")
          this.user = new User();
        }
      );
  }
}
