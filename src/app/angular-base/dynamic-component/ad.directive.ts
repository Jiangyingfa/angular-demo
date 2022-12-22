import { Directive, ViewContainerRef } from '@angular/core';

/**
 * 指令锚点，用于动态组件插入
 */
@Directive({
  selector: '[appAd]'
})
export class AdDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
