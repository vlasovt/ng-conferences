import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import {userRoutes} from './user.routes';
import { LoginComponent } from './login/login.component';
 
@NgModule({
  declarations: [ProfileComponent, LoginComponent],
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule.forChild(userRoutes)
  ],
  providers: [

  ]
})
export class UserModule { }
