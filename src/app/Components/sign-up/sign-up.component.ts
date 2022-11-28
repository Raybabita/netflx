import { Component, OnInit, ViewChild } from '@angular/core';


import { Movies } from 'src/app/Model/movies';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieserviceService } from 'src/app/Services/movieservice.service';

import { AuthService } from 'src/app/Services/auth.service';
import { ErrorService } from 'src/app/Services/error.service';
import { ObjectExpression } from 'mongoose';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  errorMsg!: any;


  constructor(private router: Router, private formBuilder: FormBuilder, private auth: AuthService, private _errService: ErrorService) {
    this.signUpForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onLogin() {
    this.router.navigate(['login'])
  }


  onSubmit() {
    console.log(this.signUpForm.value)
    const email = this.signUpForm.value.email
    const password = this.signUpForm.value.password
    this.auth.userSignUp(email, password).subscribe(res => {
      console.log(res);
      this.router.navigate(['login'])
    }, err => {
      // console.log(err)
      this.errorMsg = err.error.error.message;
    })
  }

}

