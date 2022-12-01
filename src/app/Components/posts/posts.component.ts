import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  commentform!: FormGroup;
  constructor(private formBulider: FormBuilder) {
    this.commentform = this.formBulider.group({
      'comment': ['']
    })
  }

  ngOnInit(): void {

  }
  onsubmit() {
    console.log(this.commentform.value)
  }
}
