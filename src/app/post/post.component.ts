import { Component, OnInit } from '@angular/core';
import { IPost } from './post.interface';
import { PostService } from './post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: IPost;
  constructor(private route: ActivatedRoute, private postService: PostService) {

  }

  ngOnInit() {
    this.route.params.subscribe(res => {
      const postId = res.id;
      this.postService.getPost(postId).subscribe(x => this.post = x);
     }
    );
  }
}
