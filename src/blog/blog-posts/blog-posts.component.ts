import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PostListDto } from '../blog.dtos';

@Component({
  selector: 'blog-posts',
  templateUrl: './blog-posts.component.html'
})
export class BlogPostsComponent implements OnInit {

  constructor(private router: Router) {
    this.init();
  }

  @Input() posts: Array<PostListDto> = [];

  init() {
  }

  ngOnInit() {
  }

  goTo(slug) {
    console.warn(slug);
    this.router.navigate(['/' + slug ]);
  }

}