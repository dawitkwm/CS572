import { Directive, ElementRef, Renderer2, HostListener} from '@angular/core';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

@Directive({
  selector: '[loggable]'
})
export class LoggableDirective {

  constructor(private element: ElementRef, private renderer2: Renderer2) {}

  @HostListener('dblclick')
  ondblclick() {
    console.log(`${this.element.nativeElement.tagName} element has been double-clicked.`);
  }

}
