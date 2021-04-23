import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import {RecipesService} from '../recipes.service';
import {User} from '../user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }
//   onFormSubmit(userForm: NgForm) {
//     console.log(userForm.value);
//     console.log('username:' + userForm.controls.userName.value);
//     console.log('password:' + userForm.controls.passWord.value);
//     console.log('Form Valid:' + userForm.valid);
//     console.log('Form Submitted:' + userForm.submitted);
//   }
//   resetUserForm(userForm: NgForm) {
//     userForm.resetForm();
//   }
// }


export class LoginComponent implements OnInit {
  user ?: User;
  logged = false;
  username = '';
  password = '';

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

  constructor(private recipeService: RecipesService,
    private location: Location) {
  }

  login() {
    this.recipeService.login(this.username, this.password).subscribe((data) => {
      
      localStorage.setItem('token', data.token);
      this.logged = true;
      
      this.username = '';
      this.password = '';
    });
  }
  
  logout() {
    this.username = '';
    this.password = '';
    this.logged = false;
    localStorage.removeItem('token');
  }
  goBack(): void {
    this.location.back();
  }
}