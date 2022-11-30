
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  userform!: FormGroup;
  success: boolean = false;
  errorMsg = "";
  constructor(private auth: AuthService, private route: Router, private formBuilder: FormBuilder) {
  }
  token = JSON.parse(localStorage.getItem('userDetails') || '{}')._token;
  ngOnInit(): void {
    this.userform = this.formBuilder.group({
      'newpassword': ['', Validators.required],
    })
  }
  onSubmit() {
    console.log(this.userform.value);
    const updateData = { idToken: this.token, ...this.userform.value };
    console.log(updateData)
    this.auth.changePassword(updateData).subscribe(res => {
      console.log(res)
      this.success = true;
    }, err => {
      this.errorMsg = err.error.error.message;
      console.log(err)
    })
  }
  onpasswordChange() {
    this.auth.signOut()
    this.route.navigate(['/login'])
  }
  onDiscard() {
    this.userform.reset()
  }
}
