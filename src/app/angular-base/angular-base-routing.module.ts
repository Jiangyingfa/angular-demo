import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { CommandComponent } from './command/command.component';
import { CountDownParentComponent } from './component-interact/by-local-variables/count-down-parent/count-down-parent.component';
import { MissionControlComponent } from './component-interact/by-service/mission-control/mission-control.component';
import { CountDownParentVcComponent } from './component-interact/by-view-child/count-down-parent-vc/count-down-parent-vc.component';
import { DiComponent } from './di/di.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'binding', component: BindingComponent },
      { path: 'command', component: CommandComponent },
      { path: 'di', component: DiComponent },
      { path: 'count-down-lv', component: CountDownParentComponent },
      { path: 'count-down-vc', component: CountDownParentVcComponent },
      { path: 'mission-control', component: MissionControlComponent },
      { path: 'dynamic-component', component: DynamicComponentComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularBaseRoutingModule { }
