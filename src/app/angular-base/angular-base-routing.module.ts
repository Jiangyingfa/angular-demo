import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { CommandComponent } from './command/command.component';
import { ParentComponent } from './component-interact/parent/parent.component';
import { DiComponent } from './di/di.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'binding', component: BindingComponent },
      { path: 'command', component: CommandComponent },
      { path: 'di', component: DiComponent },
      { path: 'interact', component: ParentComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularBaseRoutingModule { }
