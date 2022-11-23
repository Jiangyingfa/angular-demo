import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularBaseRoutingModule } from './angular-base-routing.module';
import { BindingComponent } from './binding/binding.component';
import { CommandComponent } from './command/command.component';
import { DiComponent } from './di/di.component';
import { ParentComponent } from './component-interact/parent/parent.component';
import { ChildCountDownComponent } from './component-interact/child-count-down/child-count-down.component';
import { ParentViewChildComponent } from './component-interact/parent-view-child/parent-view-child.component';


@NgModule({
  declarations: [
    BindingComponent,
    CommandComponent,
    DiComponent,
    ParentComponent,
    ChildCountDownComponent,
    ParentViewChildComponent
  ],
  imports: [
    CommonModule,
    AngularBaseRoutingModule
  ]
})
export class AngularBaseModule { }
