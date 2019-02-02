import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AppService } from '../app.service';


@Injectable()
export class UserGuard implements CanActivate {
  constructor(private appService: AppService, private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    for (let user of this.appService.getCachedData().results) {
      console.log(route.params['id']);
      console.log(user.login.uuid);
      if (route.params['id'] === user.login.uuid) { 
        return of(true); 
      }
    }
    return of(false)
  }
}