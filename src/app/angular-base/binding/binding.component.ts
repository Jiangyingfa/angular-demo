import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  canClick = false;
  sayHelloId = 1;
  fontColor = 'red';
  message = 'Hello, world!';

  constructor() { }

  ngOnInit(): void {
  }

  sayMessage() {
    alert(this.message);
  }

}
