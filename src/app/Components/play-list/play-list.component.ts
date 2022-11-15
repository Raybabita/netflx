import { Component, OnInit } from '@angular/core';
import { MyplaylistService } from 'src/app/Services/myplaylist.service';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {
  movie: any = [];


  constructor(private playListService: MyplaylistService) { }

  ngOnInit(): void {
    this.playListService.getProducts().subscribe(res => {
      this.movie = res;
      console.log(this.movie)

    })
  }

  removeItem(item: any) {

    this.playListService.removeCartItem(item);
  }

  onEmptyPlayList() {
    this.playListService.removeAll();
  }

}
