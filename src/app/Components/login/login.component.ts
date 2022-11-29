import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/Model/movies';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieserviceService } from 'src/app/Services/movieservice.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  errorMsg = "";
  constructor(private user: MovieserviceService, private auth: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.loginForm.value)
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.auth.userLogin(email, password).subscribe(res => {
      console.log(res)
      this.router.navigate(['mainpage'])
    }, err => {
      this.errorMsg = err.error.error.message;
    })
  }

  onSignup() {
    this.router.navigate(['signup'])
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
