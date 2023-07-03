import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  //yeni user objesi oluşturduk form içinde kullanmak için , tipleri belirledik..
  user: User= {
    userId:0,
    username:"",
    email:"",
    creationDate:"",
    isActive: false
  }

  constructor(private userService: UserService) {
    this.userService.setUsers();

  }
  //userService componentinden veri önce setUsers fonksiyonunu kullanarak verileri çektik,
  //sonra getUsers kullanarak userCount fonksiyonu ile son userId'yi bularak yeni userId
  //atamaları gerçekleştirildi.
  handleCreateClick() {
    this.user.userId = this.userService.getUsers()[this.userService.userCount() -1 ].userId + 1; 
    this.userService.addUser(this.user);
    console.log(this.userService.getUsers());

    
  }
}
