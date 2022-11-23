import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularBaseRoutingModule } from './angular-base-routing.module';
import { BindingComponent } from './binding/binding.component';


@NgModule({
  declarations: [
    BindingComponent
  ],
  imports: [
    CommonModule,
    AngularBaseRoutingModule
  ]
})
export class AngularBaseModule { }
