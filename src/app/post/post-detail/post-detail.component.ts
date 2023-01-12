import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/service/post/post.service';
import { CommentDto, CommentDtoMapper } from '../dto/comment.dto';
import { PostDto } from '../dto/post.dto';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: PostDto | undefined
  comments: CommentDto[] = []

  constructor(
    private activeRoute: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.loadData()
  }

  private loadData() {
    this.activeRoute.params.subscribe(e => {
      const id = e['id']
      this.getPost(id)
      this.getComments(id)
    })
  }

  private getPost(id: number) {
    this.postService.getPost(id).subscribe(res => {
      this.post = res
    })
  }

  private getComments(id: number) {
    this.postService.getComments(id).subscribe(res => {
      this.comments = res.map(e => CommentDtoMapper(e))
    })
  }
}
