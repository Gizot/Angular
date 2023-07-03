import { Injectable } from '@angular/core';
import { User } from './user';
import { defaultusers } from 'src/assets/defaultusers';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[]= []

  constructor() {}

  getUsers():User[]{
    return this.users;
  }

  setUsers(): void {
    this.users = defaultusers;
  }

  deleteUser(id: Number) : void {
    this.users=this.users.filter((user) => user.userId !== id)

  }

  findUserById(id: Number): User | undefined {
    return this.users.find((user)=>user.userId=== Number(id))

  }
  findUserByUserName(username: string): User | undefined {
    return this.users.find((user)=>user.username ===username)
  }
  findUserByEmail(email: string): User | undefined {
    return this.users.find((user)=>user.email ===email)
  }
  userCount(): number{
    return this.users.length;
  }
  editUser(editedUser: User, id: number): void {
    this.users = this.users.map(user => {
      if(user.userId === id)
        user=editedUser
        return user;
    });
  }
  addUser(user: User): void {
    
    this.users.push(user);
  }
  checkUnique(username:string, email: string, id: number): boolean {
    if(this.users.find((user)=> user.username===username.toLowerCase()) !== undefined 
    && 
    this.findUserByUserName(username.toLowerCase())!.userId !== id)
    return false;
    else if (this.users.find((user) => user.email === email.toLowerCase()) !== undefined 
    && 
    this.findUserByUserName(username.toLowerCase())!.userId !== id) 
    return false;
    else
    return true;
  }
}
