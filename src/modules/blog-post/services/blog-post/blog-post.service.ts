import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private httpClient: HttpClient) {

  }
  getBlogPost(postId: string): Observable<any> {
    return this.httpClient.get(`../../public/blog/posts/posts-meta-data.json`).pipe(map((posts: any) => posts.find( (post: any) => post.postId === postId)));
  }
}
