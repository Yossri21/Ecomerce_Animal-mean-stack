import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import {User} from "../Model/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  form: FormGroup;

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    const user = new User(
      this.form.value.email,
      this.form.value.password
    );
    console.log(user);
    this.http.post('/user/login', user).subscribe(data =>  localStorage.setItem("user", JSON.stringify(data)) ,
        error => console.log(error));
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null)
    });
  }

}
