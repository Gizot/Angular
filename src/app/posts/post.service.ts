import { Injectable } from '@angular/core';
import { Post } from './post';
import { defaultposts } from 'src/assets/defaultposts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts : Post[] = []

  constructor() { }

  getPosts(): Post[] {
    return this.posts;
  }

  setPosts(): void {
     this.posts= defaultposts;
  }



}
