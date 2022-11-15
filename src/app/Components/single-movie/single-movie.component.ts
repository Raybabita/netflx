import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from 'src/app/Model/movies';
import { MovieserviceService } from 'src/app/Services/movieservice.service';
import { MyplaylistService } from 'src/app/Services/myplaylist.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {
  id: any;
  data: any;
  headerBGUrl!: any;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieserviceService,
    private playListService: MyplaylistService,
    private route: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id)
    this.getOne()
    this.getImage()
  }

  getOne() {
    this.movieService.getMovieById(this.id).subscribe(data => {
      this.data = data;
      console.log(this.data)
    })
  }
  image: any;

  getImage() {
    this.movieService.getImage(this.id).subscribe(imageItem => {
      this.image = imageItem;
      this.headerBGUrl = 'https://image.tmdb.org/t/p/original' + imageItem?.backdrops?.[1].file_path;
      console.log(this.headerBGUrl)
    })
  }


  playVideo() {
    this.route.navigate(['video'])
  }
  onAddPlayList(data: any) {
    this.playListService.addtocart(data);
  }
















}
