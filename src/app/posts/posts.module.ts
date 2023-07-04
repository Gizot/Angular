import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostAddComponent } from './post-add/post-add.component';



@NgModule({
  declarations: [
    PostListComponent,
    PostAddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
