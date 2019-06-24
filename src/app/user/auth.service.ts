import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { findLast } from '@angular/compiler/src/directive_resolver';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  currentUser: IUser

  loginUser(username: string, password:string){
    this.currentUser = {
      id: 1,
      userName: 'ascold',
      firstName: 'Terry',
      lastName: 'Johnson'
    }
  }

  isAuthenticated(){
    return !!this.currentUser;
  }

  updateUserProfile(firstName: string, lastName: string){
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

}
