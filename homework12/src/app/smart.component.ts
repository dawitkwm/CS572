import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <app-dumb [courses]="mumCourses" ></app-dumb>
  `
})
export class SmartComponent implements OnInit {
  mumCourses;
  constructor() { 
    this.mumCourses = [
      {name:"Web Applications Programming", code:"CS472", block:"Mar", prof:"Shresta"},
      {name:"Modern Web Applications", code:"CS572", block:"Jan", prof:"Asaad"}
    ];
  }

  ngOnInit() {
  }

}
