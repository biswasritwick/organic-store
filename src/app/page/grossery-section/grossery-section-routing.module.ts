import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrosseryComponent } from './grossery/grossery.component';

const routes: Routes = [
  {path:'',component:GrosseryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrosserySectionRoutingModule { }
