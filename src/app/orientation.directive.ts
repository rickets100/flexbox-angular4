import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({ selector: '[cdOrientation]' })
export class OrientationDirective {
    constructor(el: ElementRef, renderer: Renderer2) {
    
    if (el.nativeElement.classList = "vertical") {
        console.log('hey------------');
        console.log(el.nativeElement.classList);
        renderer.setAttribute(el.nativeElement, 'class', 'vertical');
      }
    }
}
