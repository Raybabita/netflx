import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { Section1Component } from './Components/home/section1/section1.component';
import { Section2Component } from './Components/home/section2/section2.component';
import { Section3Component } from './Components/home/section3/section3.component';
import { Section4Component } from './Components/home/section4/section4.component';
import { Section5Component } from './Components/home/section5/section5.component';
import { FooterComponent } from './Components/home/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { MainpageComponent } from './Components/mainpage/mainpage.component';
import { SliderComponent } from './Components/slider/slider.component';
import { VideoplayerComponent } from './Components/videoplayer/videoplayer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaqComponent } from './Components/home/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    FooterComponent,
    LoginComponent,
    MainpageComponent,
    SliderComponent,
    VideoplayerComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
