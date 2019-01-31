import { Directive, Input, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[isVisible]'
})
export class IsVisibleDirective {
  @Input() 
  isVisible: boolean;

  constructor(private element: ElementRef, private renderer2: Renderer2) {
    console.log(this.isVisible);
  }

  ngAfterViewInit(): void {
    console.log(this.isVisible);
    if(!this.isVisible) {
      this.renderer2.setStyle(this.element.nativeElement, 'display', 'none');
      // this.element.nativeElement.style.display = 'none';
    }
    //else 'display: initial' i.e. the default value
  }

}
