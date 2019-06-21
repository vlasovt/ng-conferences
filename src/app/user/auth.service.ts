import { Injectable } from '@angular/core';
import { IUser } from './user.model';

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
}
