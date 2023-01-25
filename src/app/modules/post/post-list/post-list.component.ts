import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/service/post/post.service';
import { PostDto } from '../dto/post.dto';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: PostDto[] = []

  constructor(
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.loadData()
  }

  detail(id: number) {
    this.router.navigate(['post', 'detail', id])
  }

  private loadData() {
    this.postService.getPosts().subscribe(response =>
      this.posts = response
    )
  }
}
