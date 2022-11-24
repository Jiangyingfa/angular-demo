import { Component, OnInit } from '@angular/core';
import { Mission } from '../model/mission.model';
import { MissionService } from '../service/mission.service';

@Component({
  selector: 'app-mission-control',
  template: `
  <h3>Mission Control</h3>
  <div>
    <div style="display: inline-flex;">
      <div style="width: 240px;">mission name</div>
      <div>operation</div>
    </div>
  </div>
  <br/>
  <div *ngFor="let mission of missionList">
    <div style="display: inline-flex;" >
      <div style="width: 240px;">{{mission.name}}</div>
      <div><button (click)="announce(mission)" [disabled]="mission.status !== 'unannounced'">Announce</button></div>
    </div>
  </div>
  <br/><br/>

  <app-astronaut *ngFor="let astronaut of astronautList" [astronaut]="astronaut">
  </app-astronaut>
  <br/><br/>
  <h3>Histroy</h3>
  <ul *ngFor="let event of historyList">
    <li>{{event}}</li>
  </ul>
  `,
  providers: [MissionService],
})
export class MissionControlComponent implements OnInit {

  missionList: Mission[] = [
    { name: 'Log in to moon!', status: 'unannounced' },
    { name: 'Take sample from moon!', status: 'unannounced' },
    { name: 'Fix the mechine!', status: 'unannounced' },
    { name: 'Back to earth!', status: 'unannounced' }
  ];
  astronautList = ['Amu', 'Steroph', 'Kris', 'Emma'];
  historyList: string[] = [];

  constructor(private missionService: MissionService) {
    missionService.confirmedMission$.subscribe(astronaut => {
      this.historyList.push(`${astronaut} confirmed the mission.`)
    });
    missionService.announcedMission$.subscribe(mission => {
      this.historyList.push(`[${mission.name}] was announced.`);
    });
  }

  ngOnInit(): void {
  }

  announce(mission: Mission) {
    mission.status = 'announced';
    this.missionService.announce(mission);

  }
}
