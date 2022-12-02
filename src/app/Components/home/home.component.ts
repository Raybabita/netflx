import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { Amplify, Auth } from 'aws-amplify';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {

    Auth.currentAuthenticatedUser().then((res) => {
      if (res) {
        this.router.navigate(['mainpage'])
      }
    });
    // this.auth.user.subscribe(res => {
    //   if (res) {
    //     this.router.navigate(['mainpage'])
    //   }
    // })
  }

}
