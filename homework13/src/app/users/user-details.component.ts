import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-userdetails',
  template: `
    <div>
      <img src="{{userData.picture.thumbnail}}" alt="{{userData.name.first}} picture">
      <p> Name: {{userData.name.first}} {{userData.name.last}}</p>
      <p> Gender: {{userData.gender}}</p>
      <p> Date of Birth: {{userData.dob.date | date}} (Age: {{userData.dob.age}})</p>
      <p> Cellphone: {{userData.cell}}</p>
      <p> Email: {{userData.email}}</p>
      
    </div>
  `,
  styles: []
})
export class UserDetailsComponent implements OnInit, OnDestroy{
  private subscription: Subscription;
  id: string;
  userData: Object;
  constructor(private route: ActivatedRoute, public appService: AppService) {
    this.subscription = route.params.subscribe(
      (params:any) => this.id = params['id']
    );
    this.getUserDetails(this.id);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getUserDetails(uuid) {
    this.appService.getCachedData().results.forEach(user => {
      if(user.login.uuid == uuid) {
        this.userData = user;
      }
    });
  }

}

// {{userData | json}}
