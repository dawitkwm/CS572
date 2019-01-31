import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
    <h1 [isVisible]="h1Visibility" > Presentation by Dumb Component </h1>
    <ul>
      <li loggable *ngFor="let course of courses; let i=index">
        {{i+1}}: {{course.name}} ({{course.code}}) by Prof. {{course.prof}}
      </li>
    </ul>
  `,
  styles: [

  ]
})
export class DumbComponent implements OnInit {
  @Input() courses: Object[];
  h1Visibility: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
