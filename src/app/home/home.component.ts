import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { PostListDto } from '../../blog/blog.dtos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private appService: AppService) {

  }

  async ngOnInit() {
    this.posts = await this.appService.getPosts().toPromise();
  }

  posts: Array<PostListDto> = [];

}