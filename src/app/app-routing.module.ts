import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { PostListComponent } from './posts/post-list/post-list.component';

const routes: Routes = [
  {path:"userlist",component:UserListComponent},
  {path: "useradd", component: UserAddComponent},
  {path: "postlist", component: PostListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
