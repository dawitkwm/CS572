import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-users',
  template: `
    <div>
      <ul>
        <li *ngFor="let user of users">
          <a [routerLink]="[user.login.uuid]">
            {{user.name.first}} {{user.name.last}}
          </a>
        </li>
      </ul>
    </div>
  `,
  styles: []
})
export class UsersComponent implements OnInit {
  private users;
  constructor(public appService: AppService) {
    this.users = this.appService.getCachedData().results;
   }

  ngOnInit() {
  }

}



