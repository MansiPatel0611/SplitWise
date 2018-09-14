import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/UserService';
import { Router } from '@angular/router';
import { User, CommonResponse } from '../Models/Model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private user_service: UserService, private router: Router) { }
  public user = new User();
  public id: any;

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.user);
    this.user_service.register(this.user.user_name, this.user.email_id, this.user.password)
      .subscribe(
      (result: CommonResponse) => {
        this.id = result.id
        console.log(this.id)
        this.router.navigate(['/Board', this.id])
      },
      error => {
        alert("Id already exist. Plz use another id.")
        this.user = new User();
      });
    console.log(this.id);
  }
}
