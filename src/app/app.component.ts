import { Component, OnInit } from '@angular/core';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'netflix-clone';
  constructor(private authservice: AuthService) { }
  ngOnInit(): void {
    this.authservice.autosignIn()
  }

}
