import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import AWSS3UploadAshClient from 'aws-s3-upload-ash';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { UploadResponse } from 'aws-s3-upload-ash/dist/types';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  fileSelected: any = null;
  userform!: FormGroup;
  userData!: any;
  editMode: Boolean = false;
  token = JSON.parse(localStorage.getItem('userDetails') || '{}')._token;

  constructor(private auth: AuthService, private route: Router, private formBuilder: FormBuilder, private activateRoute: ActivatedRoute) {

  }
  onDiscard() {
    this.route.navigate([], { queryParams: { EditMode: null } })
  }

  config = {
    bucketName: 'aws-s3-upload-image',
    dirName: 'media', /* optional - when use: e.g BUCKET_ROOT/dirName/fileName.extesion */
    region: 'us-east-1',
    accessKeyId: environment.AWS_ACCESS_KEY,
    secretAccessKey: environment.AWS_SECRET_KEY,
    s3Url: 'https://aws-s3-upload-image.s3.amazonaws.com/'
  }


  S3CustomClient: AWSS3UploadAshClient = new AWSS3UploadAshClient(this.config);
  onChangeFile(event: any) {
    console.log(event.target.files[0])
    this.fileSelected = event.target.files[0]
  }


  async handleSendFile() {
    console.log(environment)
    console.log("handleSendFile")
    await this.S3CustomClient
      .uploadFile(this.fileSelected, this.fileSelected.type, undefined, this.fileSelected.name,)
      .then((data: UploadResponse) => console.log("successful upload", data))
      .catch((err: any) => console.error("error while uploading", err))
  }

  ngOnInit(): void {
    this.userform = this.formBuilder.group({
      'givenName': ['', Validators.required],
      'imageUrl': ['']
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
  url = "https://res.cloudinary.com/dahw90b2z/image/upload/v1668097628/im_jvwl1k.webp"
  onChangeSelectedFile(e: any) {
    let file = e.target?.files?.[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }

  }

  logout() {
    localStorage.clear()
    this.route.navigate(['/login'])
  }

  onSubmit() {
    const user = this.userform.value;
    console.log(user)
    this.auth.updateUser(this.userform.value).then((res) => {
      console.log("user updated data", res)
    })
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
