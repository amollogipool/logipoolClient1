import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userRegister: FormGroup;
  private formSubmitAttempt: boolean;

  constructor(private fb: FormBuilder, private router: Router, private location: Location) {
    this.createUserRegistration();
  }

  createUserRegistration() {
    this.userRegister = this.fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
      })
  }

  isFieldInvalid(field: string) {
    return (
      (!this.userRegister.get(field).valid && this.userRegister.get(field).touched) ||
      (this.userRegister.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.userRegister.valid) {
      alert('User is registerd successfully');
      this.router.navigate(['/login']);
    } else {
      alert('Please enter all fields.');
      this.userRegister.markAsTouched();
    }
    this.formSubmitAttempt = true;
  }

  goToBack(){
    this.location.back();
  }
  
  ngOnInit() {
  }

}
