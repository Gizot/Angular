import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
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

  constructor(private userService: UserService, private router: Router) {
    this.userService.setUsers();

  }
  //userService componentinden veri önce setUsers fonksiyonunu kullanarak verileri çekiyor,
  //sonra getUsers kullanarak userCount fonksiyonu ile son userId'yi bularak yeni userId
  //atamalarını gerçekleştirdik.
  handleCreateClick() {
    this.user.userId = this.userService.getUsers()[this.userService.userCount() -1 ].userId + 1; 
    if(this.user.username==="" || this.user.email === "" || this.user.creationDate === "")
    alert("Fill the empty spaces.")
    else if(this.userService.checkUnique(this.user.username, this.user.email, this.user.userId)===false)
    alert("This user already exist.")
    else {
      this.userService.addUser(this.user);
      console.log(this.userService.getUsers());
    }

    this.userService.addUser(this.user);
    console.log(this.userService.getUsers());
  }

  handleCancelClick(){
    this.router.navigateByUrl("/userlist");
  }
}
