import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {

  canEdit = false;
  message = 'I\'m read only!';

  constructor() { }

  ngOnInit(): void {
  }

  onEditClick() {
    this.canEdit = !this.canEdit;

    this.message = 'I\'m read only!';
    if (this.canEdit) {
      this.message = 'You can edit me!';
    }
  }

}
