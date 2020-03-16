import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule, HttpClientModule
  ],
  declarations: [BlogPostsComponent, BlogPostComponent],
  exports: [BlogPostsComponent, BlogPostComponent],
  providers: []
})
export class BlogModule { }