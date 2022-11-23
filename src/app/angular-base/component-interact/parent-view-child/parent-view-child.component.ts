import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildCountDownComponent } from '../child-count-down/child-count-down.component';

@Component({
  selector: 'app-parent-view-child',
  template: `
  <h3>Countdown to Liftoff</h3>
  <button (click)="start()">start</button>
  <button (click)="stop()">stop</button>
  <h6>{{seconds()}}</h6>
  <app-child-count-down></app-child-count-down>
  `
})
export class ParentViewChildComponent implements AfterViewInit {

  @ViewChild(ChildCountDownComponent)
  private timerComponent!: ChildCountDownComponent;

  constructor() { }

  ngAfterViewInit(): void {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  seconds() { return 0; }
  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }

}
