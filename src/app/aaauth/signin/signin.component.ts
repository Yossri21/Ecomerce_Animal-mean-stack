import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {User} from "../../Model/User";
import {FormGroup , FormControl , Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;

  constructor(private autService:AuthService , private router: Router) { }

  onSubmit(){
    const user = new User(this.myForm.value.email ,
      this.myForm.value.password);
    this.autService.signin(user).then(
      (data: any) =>{
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId' , data.userId);
        this.router.navigate(['/animals']);
      })
      .catch(error => console.error(error));

    this.myForm.reset();
  }



  ngOnInit() {
    this.myForm=new FormGroup({
      email: new FormControl(null , Validators.required
        ),
      password: new FormControl(null, Validators.required)
    });

  }

}
