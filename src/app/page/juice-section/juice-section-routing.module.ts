import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuiceComponent } from './juice/juice.component';

const routes: Routes = [
  {path:'',component:JuiceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuiceSectionRoutingModule { }
