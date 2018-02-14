import { PostService } from './post.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { AppRoutingModule } from '../app-routing.module';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule, RouterModule, HttpClientModule
  ],
  declarations: [PostComponent, PostsComponent],
  providers: [PostService]
})
export class PostModule { }
