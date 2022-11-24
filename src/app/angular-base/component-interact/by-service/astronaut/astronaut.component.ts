import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Mission } from '../model/mission.model';
import { MissionService } from '../service/mission.service';

@Component({
  selector: 'app-astronaut',
  template: `
  <div>
    <div style="display: inline-flex;">
      <div style="width: 320px;">{{astronaut}}: <strong>{{mission.name}}</strong></div>
      <button (click)="confirm(mission)" [disabled]="mission.status !== 'announced'">Confirm</button>
    </div>
  </div>
  `
})
export class AstronautComponent implements OnDestroy {

  @Input() astronaut = '';

  mission: Mission = { name: '<no mission announced>', status: 'unannounced' };
  subscription!: Subscription;

  constructor(private missionService: MissionService) {
    this.subscription = missionService.announcedMission$.subscribe(mission => {
      this.mission = mission;
    });
  }

  ngOnDestroy(): void {
    //prevent memeroy leak when component destroyed
    this.subscription.unsubscribe();
  }

  confirm(mission: Mission) {
    mission.status = 'confirmed';
    this.missionService.confirm(this.astronaut);
  }

}
