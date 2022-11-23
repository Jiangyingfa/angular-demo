import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child-count-down',
  template: '<p>{{message}}</p>'
})
export class ChildCountDownComponent implements OnDestroy {

  message = '';
  intervalId = 0;
  seconds = 11;

  constructor() { }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  start() {
    this.countDown();
  }

  stop() {
    this.clearTimer();
    this.message = `T-${this.seconds} seconds`;
  }

  private clearTimer() {
    clearInterval(this.intervalId);
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;

      if (this.seconds === 0) {
        this.message = 'Blass off!'
        this.clearTimer();
        // this.seconds = 10;
      } else {
        if (this.seconds < 0) { this.seconds = 10; }
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }

}
