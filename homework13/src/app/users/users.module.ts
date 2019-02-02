import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details.component';
import {ErrorComponent} from './error.component';
import {UserGuard} from './user-guard.service';

@NgModule({
  declarations: [UsersComponent, UserDetailsComponent, ErrorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: UsersComponent},
      {path: ':id', component: UserDetailsComponent, canActivate: [UserGuard]},
      {path: 'error', component: ErrorComponent},
    ])
  ],
  exports: [UsersComponent, UserDetailsComponent, ErrorComponent, RouterModule],
  providers: [UserGuard],
})
export class UsersModule { }
