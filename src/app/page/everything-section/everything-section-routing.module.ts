import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EverythingComponent } from './everything/everything.component';
import { EverythingSidefilterComponent } from './everything-sidefilter/everything-sidefilter.component';

const routes: Routes = [
  {path:'',component:EverythingComponent},
  {path:'side-filter',component:EverythingSidefilterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EverythingSectionRoutingModule { }
