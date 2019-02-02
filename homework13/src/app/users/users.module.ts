import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details.component';
import {UserGuard} from './user-guard.service';

@NgModule({
  declarations: [UsersComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: UsersComponent},
      {path: ':id', component: UserDetailsComponent, canActivate: [UserGuard]}
    ])
  ],
  exports: [UsersComponent, UserDetailsComponent, RouterModule],
  providers: [UserGuard],
})
export class UsersModule { }
