import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CountDownTimerComponent } from '../../count-down-timer/count-down-timer.component';

@Component({
  selector: 'app-count-down-parent-vc',
  template: `
  <h3>Countdown to Liftoff</h3>
  <button (click)="start()">start</button>
  <button (click)="stop()">stop</button>
  <h6>{{seconds()}}</h6>
  <app-count-down-timer></app-count-down-timer>
  `
})
export class CountDownParentVcComponent implements AfterViewInit {

  @ViewChild(CountDownTimerComponent)
  private timer!: CountDownTimerComponent;

  constructor() { }

  ngAfterViewInit(): void {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.timer.seconds, 0);
  }

  seconds() { return 0; }
  start() { this.timer.start(); }
  stop() { this.timer.stop(); }

}
