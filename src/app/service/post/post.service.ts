import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment';
import { CommentResponse } from './models/comment.response';
import { PostResponse } from './models/post.response';

@Injectable()
export class PostService { 
  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<PostResponse[]> {
    const url = `${environment.url}/posts`
    return this.httpClient.get<PostResponse[]>(url)
  }

  getPost(id: number): Observable<PostResponse> {
    const url = `${environment.url}/posts/${id}`
    return this.httpClient.get<PostResponse>(url)
  }

  getComments(id: number): Observable<CommentResponse[]> {
    const url = `${environment.url}/posts/${id}/comments`
    return this.httpClient.get<CommentResponse[]>(url)
  }
}