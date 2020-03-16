import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostDto } from '../blog/blog.dtos';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get<Array<PostDto>>('/assets/files/posts.json');
  }

  getPost(slug:string){
    return this.http.get<PostDto>(`/assets/files/${slug}.json`);
  }

}