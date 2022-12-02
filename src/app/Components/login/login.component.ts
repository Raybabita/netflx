import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/Model/movies';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieserviceService } from 'src/app/Services/movieservice.service';
import { AuthService } from 'src/app/Services/auth.service';
import { authUser } from 'src/app/Model/awsuserauth';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  errorMsg = "";
  success: boolean = false;
  user: authUser | undefined;
  isForgotPassword: boolean = false;
  newPassword: string = '';
  pwdSuccessful: string = '';
  constructor(private auth: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      showPassword: [''],
      verificationCode: [''],
      newPassword: [''],
    })

  }

  ngOnInit(): void {
    Auth.currentAuthenticatedUser().then((res) => {
      if (res) {
        this.router.navigate(['mainpage'])
      }
    });
    this.user = {} as authUser;

  }

  loginBtnclicked() {
    console.log(this.loginForm.value);
    if (this.user && this.user.email && this.user.password) {
      this.auth.signIn(this.user).then((res) => {
        this.router.navigate(['mainpage']);
      }).catch((error) => {
        this.errorMsg = error.message;
      })
    } else {
      this.errorMsg = "Please Enter a valid email or password";
    }
  }


  onforgotPassowordBtnClicked() {
    if (this.user && this.user.email) {
      this.auth.forgotPassword(this.user).then((res) => {
        this.isForgotPassword = true;
      }).catch((error) => {
        this.errorMsg = error.message;
      })
    } else {
      this.errorMsg = "Please Enter a Valid Email address";
    }
  }

  newPasswordSubmit() {
    console.log(this.loginForm.value)
    if (this.user && this.user.verificationCode && this.newPassword.trim().length != 0) {
      this.auth.forgotPasswordSubmit(this.user, this.newPassword.trim()).then((res) => {
        this.pwdSuccessful = "Password Updated";
        this.success = true;
      }).catch((errror) => {
        this.errorMsg = errror.message;
      })
    } else {
      this.errorMsg = "Please Ener Valid Input";
    }
  }



  // onSubmit() {
  //   console.log(this.loginForm.value)
  //   const email = this.loginForm.value.email;
  //   const password = this.loginForm.value.password;
  //   this.auth.userLogin(email, password).subscribe(res => {
  //     console.log(res)
  //     this.router.navigate(['mainpage'])
  //   }, err => {
  //     this.errorMsg = err.error.error.message;
  //   })
  // }

  onSignup() {
    this.router.navigate(['signup'])
  }

  onforgotPassword() {
    this.router.navigate(['forgotpassword'])
  }
  // login() {
  //   const data = this.loginForm.value;
  //   console.log(data)
  //   this.auth.signin(data).subscribe((res) => {
  //     if (res.success) {
  //       this.isProcess = false;
  //       localStorage.setItem('token', res.token)
  //       this.message = res.message;
  //       // alert(res.success)
  //       this.router.navigate(['mainpage'])
  //     } else {
  //       this.isProcess = false;
  //       this.message = res.message;
  //       alert(res.message)
  //     }
  //   }, err => {
  //     this.isProcess = false;
  //     alert("login failed")
  //   });
  // }

}
