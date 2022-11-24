import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularBaseRoutingModule } from './angular-base-routing.module';
import { BindingComponent } from './binding/binding.component';
import { CommandComponent } from './command/command.component';
import { CountDownParentComponent } from './component-interact/by-local-variables/count-down-parent/count-down-parent.component';
import { AstronautComponent } from './component-interact/by-service/astronaut/astronaut.component';
import { MissionControlComponent } from './component-interact/by-service/mission-control/mission-control.component';
import { CountDownParentVcComponent } from './component-interact/by-view-child/count-down-parent-vc/count-down-parent-vc.component';
import { CountDownTimerComponent } from './component-interact/count-down-timer/count-down-timer.component';
import { DiComponent } from './di/di.component';


@NgModule({
  declarations: [
    BindingComponent,
    CommandComponent,
    DiComponent,
    MissionControlComponent,
    AstronautComponent,
    CountDownParentComponent,
    CountDownParentVcComponent,
    CountDownTimerComponent
  ],
  imports: [
    CommonModule,
    AngularBaseRoutingModule
  ]
})
export class AngularBaseModule { }
