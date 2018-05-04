import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from "@angular/forms";
import { Router } from "@angular/router";
import {User} from "../../Model/User";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private http: HttpClient, private router: Router) { }

  register(){
    const user = new User(
      this.form.value.email,
      this.form.value.password,
      this.form.value.name,
      this.form.value.lastname,
      this.form.value.phone
    );
    //const headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = JSON.stringify(user);
    console.log(body);
    this.http.post('/user',  user).subscribe(data =>this.router.navigate(['/auth']), error => console.log(error));
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(""),
      password: new FormControl(""),
      name: new FormControl(""),
      lastname: new FormControl(""),
      phone: new FormControl("")
    });
  }

}
