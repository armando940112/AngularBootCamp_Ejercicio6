import { Injectable } from '@angular/core';
import { IPost } from './post.interface';
import { POSTS } from './post-mock.mock';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
  selectedPost: IPost;
  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts/');
  }

  getPost(id: number): Observable<IPost> {
    return this.http.get<IPost>('https://jsonplaceholder.typicode.com/posts/' + id);
  }

}
