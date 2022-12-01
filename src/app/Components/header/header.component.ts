import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { MyplaylistService } from 'src/app/Services/myplaylist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalItem: number = 0;
  isshowMenu = false;
  sticky = false;
  data!: any;
  userData !: any;
  token = JSON.parse(localStorage.getItem('userDetails') || '{}')._token;
  constructor(private route: Router, private playlistService: MyplaylistService, private auth: AuthService,) {
    this.myUrlVariable = 'https://res.cloudinary.com/dahw90b2z/image/upload/v1668097628/im_jvwl1k.webp';
    this.getdata()
  }

  ngOnInit(): void {
    this.playlistService.getMovie().subscribe(res => {
      this.totalItem = res.length;
    })

    this.getdata()


  }

  getdata() {

  }
  // getdata() {
  //   this.auth.getUserProfile(this.token).subscribe(res => {
  //     console.log("header", res)
  //     this.userData = res.users?.[0];
  //     console.log(this.userData?.photoUrl)
  //   })
  // }
  onSearch() {
    this.route.navigate(['movieSearchList'])
  }

  onTvshow() {
    this.route.navigate(['tvshow'])
  }
  onHome() {
    this.route.navigate(['mainpage'])
  }

  onMovies() {
    this.route.navigate(['discovermovie'])
  }


  @ViewChild('stickyHeader') header!: ElementRef;
  headerBGUrl!: any;
  myUrlVariable!: string;


  onMenuDisplay() {
    this.isshowMenu = !this.isshowMenu;
  }

  logout() {
    // this.auth.signOut()
    this.route.navigate(['/login'])
  }


  onMyList() {
    this.route.navigate(['singleMovie/myPlaylist'])
  }

  // onProfile() {
  //   this.auth.getprofile().subscribe(res => {
  //     if (res.success) {
  //       this.data = res.data;
  //       console.log(this.data)
  //     } else {
  //       this.logout();
  //     }
  //   }, err => {
  //     console.log("user data not found")
  //   })
  // }

}
