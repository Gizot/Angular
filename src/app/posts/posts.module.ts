import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostAddComponent } from './post-add/post-add.component';
import { FormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    PostListComponent,
    PostAddComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppModule
  ],
  exports: [
    PostListComponent
  ]
})
export class PostsModule { }
