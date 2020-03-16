import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { PostDetailDto } from '../../blog/blog.dtos';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html'
})
export class PostDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private appService: AppService
  ) {

  }

  post: PostDetailDto;

  ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.post = await this.appService.getPost(params['slug']).toPromise();
    });
  }

}