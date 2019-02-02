import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>
      There is no user with the given ID!
    </p>
  `,
  styles: []
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
