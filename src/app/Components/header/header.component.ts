import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isshowMenu = false;
  sticky = false;
  constructor(private route: Router) {
    this.myUrlVariable = 'https://res.cloudinary.com/dahw90b2z/image/upload/v1668097628/im_jvwl1k.webp';
  }

  ngOnInit(): void {
  }
  onSearch() {
    this.route.navigate(['movieSearchList'])
  }
  onHome() {
    this.route.navigate(['mainpage'])
  }
  @ViewChild('stickyHeader') header!: ElementRef;
  headerBGUrl!: any;
  myUrlVariable!: string;

  onMenuDisplay() {
    this.isshowMenu = !this.isshowMenu;
  }
  logout() {
    localStorage.removeItem("userDetails");
    this.route.navigate(['/'])
  }

}
