import { Component, OnInit, Input } from '@angular/core';
import { PostDetailDto } from '../blog.dtos';

@Component({
  selector: 'blog-post',
  templateUrl: './blog-post.component.html'
})
export class BlogPostComponent implements OnInit {

  ngOnInit() {
  }

  @Input() post: PostDetailDto;

}