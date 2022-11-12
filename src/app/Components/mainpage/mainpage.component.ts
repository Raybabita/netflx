import { AfterViewInit, Input, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Movies } from 'src/app/Model/movies';
import { Subscription } from 'rxjs';
import { MovieserviceService } from 'src/app/Services/movieservice.service';
import { environment } from 'src/environments/environment';
import {
  Router
} from '@angular/router';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit, OnDestroy {


  sticky = false;
  subs: Subscription[] = [];
  trending!: Movies;
  popular!: Movies;
  topRated!: Movies;
  originals!: Movies;
  nowPlaying!: Movies;

  sliderConfig = {
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: true,
    autoplay: false
  }
  isshowMenu = false;

  inputValue!: any;

  inputText: string = "I am sample text";

  onKey(event: any) {
    this.inputValue = event.target.value;
    console.log(event.target.value)
  }

  onMenuDisplay() {
    this.isshowMenu = !this.isshowMenu;
  }

  public isMenuOpen: boolean = false;




  @ViewChild('stickyHeader') header!: ElementRef;
  headerBGUrl!: any;
  myUrlVariable!: string;
  constructor(private movie: MovieserviceService, private sanitizer: DomSanitizer, private route: Router) {
    this.myUrlVariable = 'https://res.cloudinary.com/dahw90b2z/image/upload/v1668097628/im_jvwl1k.webp';

  }



  ngOnInit(): void {
    this.subs.push(this.movie.getTrending().subscribe(data => {
      this.trending = data;
      // this.headerBGUrl = 'https://image.tmdb.org/t/p/original' + this.trending.results[0].backdrop_path;
    }
    ));
    this.subs.push(this.movie.getPopularMovies().subscribe(data => this.popular = data));
    this.subs.push(this.movie.getTopRated().subscribe(data => this.topRated = data));
    this.subs.push(this.movie.getOriginals().subscribe(data => this.originals = data));
    this.subs.push(this.movie.getNowPlaying().subscribe(data => this.nowPlaying = data));


  }


  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }


  @HostListener('window:scroll', ['$event'])
  // tslint:disable-next-line:typedef
  handleScroll() {
    const windowScroll = window.pageYOffset;

    if (windowScroll >= this.header.nativeElement.offsetHeight) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
  onSearch() {
    this.route.navigate(['/movieSearchList'])
  }

  logout() {
    localStorage.removeItem("userDetails");
    this.route.navigate(['/'])
  }
}
