import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userform!: FormGroup;
  userData!: any;
  editMode: Boolean = false;
  token = JSON.parse(localStorage.getItem('userDetails') || '{}')._token;

  constructor(private auth: AuthService, private route: Router, private formBuilder: FormBuilder, private activateRoute: ActivatedRoute) {
    // this.getuserData();
  }
  onDiscard() {
    this.route.navigate([], { queryParams: { EditMode: null } })
  }

  ngOnInit(): void {
    this.userform = this.formBuilder.group({
      'name': ['', Validators.required],
      'profilepicUrl': ['', Validators.required],
    })
    this.activateRoute.queryParamMap.subscribe(res => {
      // console.log(res.get('EditMode'))
      let queryParam = res.get('EditMode');
      if (queryParam != null) {
        this.editMode = true;
      } else {
        this.editMode = false;
      }
    })
    this.getUserDetails();
  }
  onEdit() {
  }
  getuserData() {

  }
  // onEdit() {
  //   console.log('edit click')
  //   this.auth.getUserProfile(this.token).subscribe(res => {
  //     console.log("get user data from profile", res)
  //     this.userData = res.users?.[0];
  //     console.log(this.userData)
  //     if (this.editMode == true) {
  //       this.userform.setValue({
  //         name: this.userData.displayName,
  //         profilepicUrl: this.userData.photoUrl
  //       })
  //     }

  //   })
  // }


  // getuserData() {
  //   this.auth.getUserProfile(this.token).subscribe(res => {
  //     console.log("get user data from profile", res)
  //     this.userData = res.users?.[0];
  //     console.log(this.userData)
  //     this.userform.setValue({
  //       name: this.userData.displayName,
  //       profilepicUrl: this.userData.photoUrl
  //     })

  //   })
  // }

  logout() {
    localStorage.clear()
    this.route.navigate(['/login'])
  }
  onSubmit() {

  }

  private getUserDetails() {
    this.auth.getUser().then((user: any) => {
      if (user) {
        this.userData = user?.attributes;

        console.log("this is user from aws", user)
        console.log("this is user Email", this.userData)
      } else {
        this.route.navigate(['login'])
      }
    })
  }

  signOutWithCognito() {
    this.auth.signOut().then(() => {
      this.route.navigate(['login'])
    })
  }

  // onSubmit() {

  //   // console.log(this.userform.value)
  //   // const updateData = console.log({ token: this.token, ...this.userform.value })
  //   const updateData = { token: this.token, ...this.userform.value };
  //   this.auth.updateProfile(updateData).subscribe(res => {
  //     console.log(res)
  //     this.getuserData()
  //   }, err => {
  //     console.log(err)
  //   })
  // }




  // onProfile() {
  //   this.auth.getprofile().subscribe(res => {
  //     if (res.success) {
  //       this.data = res.data;
  //     } else {
  //       this.logout();
  //     }
  //   }, err => {
  //     console.log("user data not found", err)
  //   })
  // }


}
