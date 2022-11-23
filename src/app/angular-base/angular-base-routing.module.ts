import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { CommandComponent } from './command/command.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'binding', component: BindingComponent },
      { path: 'command', component: CommandComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularBaseRoutingModule { }
