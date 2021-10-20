import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  constructor(private element: ElementRef) {
  }

  @Input('appClass')
  set color(object: any) {
    for(let key in object){
      if (object[key]){
        this.element.nativeElement.classList.add(key)
      }else{
        this.element.nativeElement.classList.remove(key)
      }
    }
  }

}
