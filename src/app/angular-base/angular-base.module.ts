import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularBaseRoutingModule } from './angular-base-routing.module';
import { BindingComponent } from './binding/binding.component';
import { CommandComponent } from './command/command.component';


@NgModule({
  declarations: [
    BindingComponent,
    CommandComponent
  ],
  imports: [
    CommonModule,
    AngularBaseRoutingModule
  ]
})
export class AngularBaseModule { }
