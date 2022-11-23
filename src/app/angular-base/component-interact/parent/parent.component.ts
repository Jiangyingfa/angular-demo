import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
  <h3>Countdown to Liftoff</h3>
  <button (click)="timer.start()">start</button>
  <button (click)="timer.stop()">stop</button>
  <h5>{{timer.seconds}}</h5>
  <app-child-count-down #timer></app-child-count-down>
  `
})
export class ParentComponent implements OnInit {

  /**
   * 本地变量的交互方式，只适用于父组件与子组件的链接都在父组件的情况
   */
  constructor() { }

  ngOnInit(): void {
  }

}
