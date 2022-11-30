import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MainpageComponent } from './Components/mainpage/mainpage.component';
import { VideoplayerComponent } from './Components/videoplayer/videoplayer.component';

import { SearchComponent } from './Components/search/search.component';
import { HeaderComponent } from './Components/header/header.component';
import { MovieListComponent } from './Components/movie-list/movie-list.component';
import { SingleMovieComponent } from './Components/single-movie/single-movie.component';
import { PlayListComponent } from './Components/play-list/play-list.component';
import { TvshowComponent } from './Components/tvshow/tvshow.component';
import { DiscovermovieComponent } from './Components/discovermovie/discovermovie.component';
import { SingletvComponent } from './Components/singletv/singletv.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { TvepisodeComponent } from './Components/tvepisode/tvepisode.component';
import { UpdateprofileComponent } from './Components/updateprofile/updateprofile.component';
import { AuthGuard } from './authGuard/auth.guard';
import { ChangepasswordComponent } from './Components/changepassword/changepassword.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'signup', component: SignUpComponent
  },
  {
    path: 'mainpage',
    component: MainpageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'video',
    component: VideoplayerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mainpage/video',
    component: VideoplayerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'movieSearchList',
    component: MovieListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mainpage/singleMovie/:id',
    component: SingleMovieComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'singleMovie/myPlaylist',
    component: PlayListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tvshow',
    component: TvshowComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'discovermovie',
    component: DiscovermovieComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tvshow/singleTv/:id',
    component: SingletvComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'discovermovie/singleMovie/:id',
    component: SingleMovieComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'mainpage/profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tvshow/singleTv/:id/season/:id/episode/:id',
    component: TvepisodeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'changepassword',
    component: ChangepasswordComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'mainpage/changepassword',
    component: ChangepasswordComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent,
    // canActivate: [AuthGuard]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [UserloginGuard]
})
export class AppRoutingModule { }
