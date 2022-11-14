import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from 'src/app/Model/movies';
import { MovieserviceService } from 'src/app/Services/movieservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {
  id: any;
  constructor(private route: ActivatedRoute, private movie: MovieserviceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.getOne()
  }

  getOne() {
    this.movie.getMovieById(this.id).subscribe(data => {
      console.log(data)
    })
  }


















}
