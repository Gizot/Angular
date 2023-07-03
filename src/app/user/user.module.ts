import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { FormsModule } from '@angular/forms';
import { AppModule } from '../app.module';





@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppModule
    
  ],
  exports: [
    UserListComponent
  ]
})
export class UserModule { }
