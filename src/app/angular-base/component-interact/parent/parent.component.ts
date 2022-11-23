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

  constructor() { }

  ngOnInit(): void {
  }

}
