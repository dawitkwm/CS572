import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// const ROUTES: Routes = [
//   {path: '', redirectTo: 'home', pathMatch: 'full'},
//   {path: 'home', component: AppComponent},
//   {path: 'users', loadChildren: './users/users.module#UsersModule'},
//   {path: 'users', component: UsersComponent},
//   {path: 'users/:id', component: UserDetailsComponent},
//   {path: 'error', component: ErrorComponent},
//   {path: '**', redirectTo: 'home'}
// ];

const ROUTES: Routes = [
  {path: 'users', loadChildren: './users/users.module#UsersModule'}  
];

@NgModule({
  imports: [RouterModule.forRoot(
    ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
