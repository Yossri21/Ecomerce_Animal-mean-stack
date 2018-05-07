import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {User} from "../../Model/User";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;
  constructor( private authService:AuthService) { }

  onSubmit(){
    const user = new User(
      this.myForm.value.email,
      this.myForm.value.password,
      this.myForm.value.name,
      this.myForm.value.lastName,
      this.myForm.value.phone

    );
    this.authService.signup(user).subscribe(
      data => console.log(data),
      error => console.log(error)

    );
    this.myForm.reset();

  }

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(""),
      name: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      phone: new FormControl("")

    });

  }

}
