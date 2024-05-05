import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLoadComponent]',
  standalone: true
})
export class LoadComponentDirective {

  constructor(private viewContainerRef:ViewContainerRef) { }

}
