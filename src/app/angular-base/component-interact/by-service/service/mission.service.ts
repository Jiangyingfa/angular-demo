import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Mission } from '../model/mission.model';

@Injectable()
export class MissionService {

  //Observable string source
  private announcedMission = new Subject<Mission>;
  private confirmedMission = new Subject<string>;

  //Observable string streams
  announcedMission$ = this.announcedMission.asObservable();
  confirmedMission$ = this.confirmedMission.asObservable();

  constructor() { }

  announce(mission: Mission) {
    this.announcedMission.next(mission);
  }

  confirm(astronaut: string) {
    this.confirmedMission.next(astronaut);
  }
}
