import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MainpageComponent } from './Components/mainpage/mainpage.component';
import { VideoplayerComponent } from './Components/videoplayer/videoplayer.component';
import { UserloginGuard } from './userlogin.guard';
import { MatIconModule } from '@angular/material/icon';
import { SearchComponent } from './Components/search/search.component';
import { HeaderComponent } from './Components/header/header.component';
import { MovieListComponent } from './Components/movie-list/movie-list.component';

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
  , {
    path: 'mainpage/search',
    component: SearchComponent,

  }
  , {
    path: 'header',
    component: HeaderComponent,

  },
  {
    path: 'movieSearchList',
    component: MovieListComponent,

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
