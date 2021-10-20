import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[appNTimes]'
})
export class NTimesDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {

  }

  @Input('appNTimes')
  set render(times: number) {
    this.viewContainer.clear()
    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i //accessed in the directive after a semicolon
      })
    }
  }

}
