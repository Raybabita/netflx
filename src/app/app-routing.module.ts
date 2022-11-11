import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MainpageComponent } from './Components/mainpage/mainpage.component';
import { VideoplayerComponent } from './Components/videoplayer/videoplayer.component';
import { UserloginGuard } from './userlogin.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent,

  },
  {
    path: 'mainpage',
    component: MainpageComponent,

  },
  {
    path: 'video',
    component: VideoplayerComponent,

  },
  {
    path: 'mainpage/video',
    component: VideoplayerComponent,

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
