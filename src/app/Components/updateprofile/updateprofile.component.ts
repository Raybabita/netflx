
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/Services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

  id: any;


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private auth: AuthService, private activatedRoute: ActivatedRoute, private route: Router) {

  }


  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log("this is profile id", this.id)


  }

  // onClickUpdateBtn() {
  //   // const data = this.userForm.value;
  //   const data = {
  //     userId: this.userForm.value.userId,
  //     name: this.userForm.value.name,
  //     email: this.userForm.value.email,
  //     ProfilePic: this.userForm.value.image
  //   };
  //   this.auth.updateProfile(this.id, data).subscribe(res => {
  //     // alert("user updated successfull")
  //     if (res.success) {
  //       this.isProcess = false;
  //       this.message = res.message;
  //     } else {
  //       this.isProcess = false;
  //       this.message = res.message;
  //     }
  //     this.userForm.reset();
  //     this.route.navigate(['/profile'])
  //   }, err => {
  //     alert(err.message);
  //     console.log(JSON.stringify(data))
  //     this.isProcess = false;
  //     this.message = "server error at updatig";
  //   });
  // }

}
