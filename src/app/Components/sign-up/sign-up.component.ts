import { Component, OnInit, ViewChild } from '@angular/core';

import { Movies } from 'src/app/Model/movies';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieserviceService } from 'src/app/Services/movieservice.service';

import { AuthService } from 'src/app/Services/auth.service';

import { ObjectExpression } from 'mongoose';
import { authUser } from 'src/app/Model/awsuserauth';
import { Auth } from 'aws-amplify';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  errorMsg!: any;

  user: authUser | undefined;
  isConfirm: boolean = false;
  alertMessage: string = '';
  showAlert: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private auth: AuthService) {
    this.signUpForm = this.formBuilder.group({
      'givenName': ['', Validators.required],
      'familyName': ['', Validators.required],
      'showPassword': [''],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
    })
  }

  ngOnInit(): void {
    Auth.currentAuthenticatedUser().then((res) => {
      if (res) {
        this.router.navigate(['mainpage'])
      }
    });
    this.user = {} as authUser;
    this.isConfirm = false;

  }

  public onSubmit() {
    if (this.user && this.user.email && this.user.password) {
      this.auth.signUp(this.user).then((res) => {
        this.isConfirm = true;
        console.log(res)
      })
        .catch((error: any) => {
          this.errorMsg = error.message;
        })
    } else {
      this.errorMsg = "Missing email or password";
    }
  }


  public confirmSignup() {
    if (this.user) {
      this.auth.ConfirmSignUp(this.user).then(() => {
        this.router.navigate(['login'])
      }).catch((error) => {
        this.errorMsg = error.message;
      })
    } else {
      this.errorMsg = "Missing email or password";
    }
  }

  onLogin() {
    this.router.navigate(['login'])
  }


  // onSubmit() {
  //   console.log(this.signUpForm.value)
  //   const email = this.signUpForm.value.email
  //   const password = this.signUpForm.value.password
  //   this.auth.userSignUp(email, password).subscribe(res => {
  //     console.log(res);
  //     this.router.navigate(['login'])
  //   }, err => {
  //     // console.log(err)
  //     this.errorMsg = err.error.error.message;
  //   })
  // }

}

