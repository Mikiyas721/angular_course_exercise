import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
  }

  @Input('appTimes') set content(numberOfLines: number) {
    this.viewContainerRef.clear()
    for (let i = 0; i < numberOfLines; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {})
    }
  }


}
