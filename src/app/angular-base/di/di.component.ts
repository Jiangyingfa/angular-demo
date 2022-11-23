import { Component, OnInit } from '@angular/core';
import { LoggerService } from './service/logger.service';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css']
})
export class DiComponent implements OnInit {

  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
  }

  testLog() {
    this.logger.log('testLog() method')
  }
}
