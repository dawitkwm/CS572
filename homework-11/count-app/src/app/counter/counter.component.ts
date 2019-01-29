import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button id="dec" (click)="decrease()"> - </button>
    {{counterValue}}
    <button id="inc" (click)="increase()"> + </button>
  `,
  styles: [
    `
    #dec {
      width: 25px;
      height:25px;
      background-color: red;
    }
    #inc {
      width: 25px;
      height:25px;
      background-color: green;
    }
    `
  ]
})
export class CounterComponent implements OnInit {
  @Input() counterValue: number;
  @Output() counterChange;

  constructor() {
    this.counterValue = 0;
    this.counterChange = new EventEmitter();
  }

  ngOnInit() { }

  decrease() {
    this.counterChange.emit(--this.counterValue);
  }

  increase() {
    this.counterChange.emit(++this.counterValue);
  }
}

