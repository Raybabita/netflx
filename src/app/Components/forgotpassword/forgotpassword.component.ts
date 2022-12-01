import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, } from '@angular/router';
import { authUser } from 'src/app/Model/awsuserauth';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  public userform!: FormGroup;
  success: boolean = false;
  errorMsg = "";
  pwdSuccessful: string = '';
  user: authUser | undefined;
  isForgotPassword: boolean = false;
  newPassword: string = '';
  constructor(private auth: AuthService, private router: Router, private formBuilder: FormBuilder) { }
  token = JSON.parse(localStorage.getItem('userDetails') || '{}')._token;
  ngOnInit(): void {
    this.userform = this.formBuilder.group({
      verificationCode: [''],
      newPassword: ['', Validators.required],
      showPassword: ['']
    })
    this.user = {} as authUser;
  }

  onSubmit() {
    console.log(this.userform.value)
    if (this.user && this.user.verificationCode && this.newPassword.trim().length != 0) {
      this.auth.forgotPasswordSubmit(this.user, this.newPassword.trim()).then((res) => {
        this.pwdSuccessful = "Password Updated";
      }).catch((errror) => {
        this.errorMsg = errror.message;
      })
    } else {
      this.errorMsg = "Please Ener Valid Input";
    }
  }



  // onSubmit() {
  //   console.log(this.userform.value)
  //   const email = this.userform.value.email;
  //   this.auth.forgotpassoword(this.userform.value).subscribe(res => {
  //     console.log("email", res)
  //     this.success = true
  //   }, err => {
  //     this.errorMsg = err.error.error.message;
  //     console.log(err)
  //   })

  // }

  onSignup() {
    this.router.navigate(['signup'])
  }

}
