import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm: any = {
    id: null,
    username: null,
    password: null
  }

  userName = new FormControl('', [Validators.required]);
  passWord = new FormControl('', [Validators.required]);

  constructor(private router: Router) {

   }

   login(){
     if(this.userName.valid && this.passWord.valid){
      alert('User login Successfully');
      this.router.navigate(['dashboard']);
     }else{
       this.userName.markAsTouched();
       this.passWord.markAsTouched();
       alert('Username and Password is required.');
     }
   }

   register(){
    this.router.navigate(['register']);
   }
  ngOnInit() {
  }

}
